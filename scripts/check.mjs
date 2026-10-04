// Run after `npm run build`. Fails on broken internal links or image paths, duplicate titles/descriptions, bad JSON-LD, or a page without exactly one <h1>.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist';
const pages = (dir) =>
	readdirSync(dir).flatMap((name) => {
		const full = join(dir, name);
		return statSync(full).isDirectory() ? pages(full) : full.endsWith('.html') ? [full] : [];
	});

const errors = [];
const seen = { title: new Map(), description: new Map() };
for (const file of pages(root)) {
	const html = readFileSync(file, 'utf8');
	const grab = (re) => html.match(re)?.[1];
	for (const [key, re] of [['title', /<title>(.*?)<\/title>/], ['description', /<meta name="description" content="(.*?)"/]]) {
		const value = grab(re);
		if (!value) errors.push(`${file}: no ${key}`);
		else if (seen[key].has(value)) errors.push(`${file}: ${key} duplicates ${seen[key].get(value)}`);
		else seen[key].set(value, file);
	}
	if ((html.match(/<h1[ >]/g) ?? []).length !== 1) errors.push(`${file}: needs exactly one <h1>`);
	try {
		JSON.parse(grab(/application\/ld\+json">(.*?)<\/script>/s));
	} catch {
		errors.push(`${file}: JSON-LD does not parse`);
	}
	for (const [, href] of [...html.matchAll(/<a [^>]*href="(\/[^"#]*)/g), ...html.matchAll(/<img [^>]*src="(\/[^"]*)/g)]) {
		const target = join(root, href);
		if (!existsSync(target) && !existsSync(join(target, 'index.html'))) errors.push(`${file}: broken link ${href}`);
	}
}
if (errors.length) {
	console.error(errors.join('\n'));
	process.exit(1);
}
console.log(`ok: ${seen.title.size} pages`);
