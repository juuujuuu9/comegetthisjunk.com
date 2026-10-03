export const areas = [
	{ name: 'Woodland Hills', slug: 'woodland-hills' },
	{ name: 'Tarzana', slug: 'tarzana' },
	{ name: 'Reseda', slug: 'reseda' },
	{ name: 'Encino', slug: 'encino' },
	{ name: 'Sherman Oaks', slug: 'sherman-oaks' },
] as const;

const link = ({ name, slug }: (typeof areas)[number]) => `<a href="/${slug}/">${name}</a>`;

export function areaLinks(current?: string) {
	const list = areas.map((area) => (area.name === current ? area.name : link(area))).join(', ');
	return `${list},<br class="served-break"> and the San Fernando Valley around them.`;
}

export function alsoHauls(current: string) {
	const rest = areas
		.filter((area) => area.name !== current)
		.map(link)
		.join(', ');
	return `<a href="/">Come Get This Junk</a> also hauls in ${rest}, and the rest of the San Fernando Valley.`;
}
