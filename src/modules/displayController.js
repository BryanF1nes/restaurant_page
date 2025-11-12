import { HeaderModule } from "./nav.js";

export const DisplayController = (function() {
	const init = () => {
		render();
	};

	const render = () => {
		HeaderModule.init();
	};

	return { init };
})();
