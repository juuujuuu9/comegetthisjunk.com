// One entry per service page in src/pages. Add an entry when the page ships so no link points at a 404.
// haul: item/job pages, linked with the city name. pro: pages for realtors, landlords and the like. info: trust pages.
export const services: { name: string; slug: string; group: 'haul' | 'pro' | 'info' }[] = [
	{ name: 'Estate cleanout', slug: 'estate-cleanout', group: 'haul' },
	{ name: 'Garage cleanout', slug: 'garage-cleanout', group: 'haul' },
	{ name: 'Hot tub removal', slug: 'hot-tub-removal', group: 'haul' },
	{ name: 'Furniture and mattress removal', slug: 'furniture-removal', group: 'haul' },
	{ name: 'Move-out and apartment cleanout', slug: 'move-out-cleanout', group: 'haul' },
	{ name: 'Appliance removal', slug: 'appliance-removal', group: 'haul' },
	{ name: 'Exercise equipment removal', slug: 'exercise-equipment-removal', group: 'haul' },
	{ name: 'Office furniture removal', slug: 'office-furniture-removal', group: 'haul' },
	{ name: 'Storage unit cleanout', slug: 'storage-unit-cleanout', group: 'haul' },
	{ name: 'Fence, patio and pool tear-out', slug: 'fence-patio-pool-tear-out', group: 'haul' },
	{ name: 'Trash valet', slug: 'trash-valet', group: 'haul' },
	{ name: 'Junk removal for realtors', slug: 'realtors', group: 'pro' },
	{ name: 'Junk removal for property managers', slug: 'property-managers', group: 'pro' },
	{ name: 'Junk removal for contractors', slug: 'contractors', group: 'pro' },
	{ name: 'Estate attorneys and senior move managers', slug: 'estate-professionals', group: 'pro' },
	{ name: 'How junk removal is priced', slug: 'junk-removal-cost', group: 'info' },
	{ name: "What we can't take", slug: 'what-we-dont-take', group: 'info' },
];

export const servicesIn = (group: string, exceptSlug?: string) =>
	services.filter((service) => service.group === group && service.slug !== exceptSlug);
