export const RewardModule = (function() {
	const NAMESPACE = 'Rewards';
	const init = () => {
		render();
	}

	const render = () => {
		const content = document.getElementById('content');
		const title = createTitle();
		return content.appendChild(title);
	}

	const createTitle = () => {
		const h1 = document.createElement('h1');
		h1.classList.add('title');

		h1.textContent = NAMESPACE;

		return h1;
	}

	return { init, NAMESPACE };
})();
