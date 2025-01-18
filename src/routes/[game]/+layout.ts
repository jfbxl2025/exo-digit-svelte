import type { LayoutLoad } from "./$types";

type GameType = "game1" | "game2" | "game3" | "game4" | "game5";

export const load: LayoutLoad = ({ params }) => {
	return {
		game: {
			name: params.game,
			steps: 6,
		},
	};
};
