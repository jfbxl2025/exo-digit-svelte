import type { PageLoad } from "./$types";
export const prerender = true;

const components = new Map([
	["game1", "$lib/Game1.svelte"],
	["game2", "$lib/Game2.svelte"],
	["game3", "$lib/Game3.svelte"],
	["game4", "$lib/Game4.svelte"],
	["game5", "$lib/Game5.svelte"],
]);

// https://svelte.dev/tutorial/kit/using-both-load-functions
export const load: PageLoad = async ({ parent, params }) => {
	const { game } = await parent();
	// const module = await import(
	// 	/* @vite-ignore */ components.get(game.name) ?? "$lib/Game1.svelte"
	// );
	let module;
	switch (game.name) {
		case "game1":
			module = await import("$lib/Game1.svelte");
			break;
		case "game2":
			module = await import("$lib/Game2.svelte");
			break;
		case "game3":
			module = await import("$lib/Game3.svelte");
			break;
		case "game4":
			module = await import("$lib/Game4.svelte");
			break;
		default:
			module = await import("$lib/Game5.svelte");
			break;
	}

	return {
		component: module.default,
		steps: game.steps,
		level: Number(params.level),
	};
};
