export const MenuModule = (function() {
	const NAMESPACE = 'Menu';
	const init = () => {
		render();
	}

	const render = () => {
		const content = document.getElementById('content');
		const h1 = document.createElement('h1');
		h1.textContent = 'Hello From the Menu';

		return content.appendChild(h1);
	}

	return { init, NAMESPACE };
})();
