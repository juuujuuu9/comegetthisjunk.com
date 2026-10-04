# Come Get This Junk

One-page site for Come Get This Junk. Junk hauling in the San Fernando Valley and Los Angeles. The footer carries the legal name, Julian Hardee Services.

Astro and TypeScript. No React. Visitor-facing copy is in `src/pages/index.md`. `src/layouts/Base.astro` is layout only.

## Run

```bash
git submodule update --init --recursive
npm install
npm run dev
```

The dev server listens on port 41731 and `0.0.0.0`.

[Local site](http://127.0.0.1:41731)

## Vendored repositories

Git submodules. Upstream files are unchanged.

| Path | Upstream |
| --- | --- |
| `vendor/ponytail` | https://github.com/DietrichGebert/ponytail.git |
| `vendor/hallmark` | https://github.com/Nutlope/hallmark.git |

Applied from those checkouts:

- **Ponytail.** Cursor rule copied from `vendor/ponytail/.cursor/rules/ponytail.mdc` to `.cursor/rules/ponytail.mdc` (the rule-only install). The six skills are linked under `.cursor/skills/`.
- **Hallmark.** Skill linked at `.cursor/skills/hallmark`, which keeps `references/` next to `SKILL.md`. The page follows the look brief: white, black text, one flat blue. No catalog theme, gradients, photos, icons, or motion.
