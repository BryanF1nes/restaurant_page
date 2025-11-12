export const RewardModule = (function() {
	const NAMESPACE = 'Rewards';
	const init = () => {
		render();
	}

	const render = () => {
		const content = document.getElementById('content');
		const h1 = document.createElement('h1');
		h1.textContent = 'Hello From the Rewards Module';

		return content.appendChild(h1);
	}

	return { init, NAMESPACE };
})();
