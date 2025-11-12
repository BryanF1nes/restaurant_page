export const RewardModule = (function() {
	const NAMESPACE = 'Rewards';

	const init = () => {
		render();
	};

	const render = () => {
		const content = document.getElementById('content');
		content.innerHTML = '';
		const title = createTitle();
		const list = createRewardList();
		content.append(title, list);
	};

	const createTitle = () => {
		const h1 = document.createElement('h1');
		h1.classList.add('title');
		h1.textContent = NAMESPACE;
		return h1;
	};

	const createRewardList = () => {
		const ul = document.createElement('ul');
		ul.classList.add('reward-list');

		const rewards = [
			"🍕 Free slice of pizza if you tell the chef a bad joke.",
			"🧙 10% discount if you show up in wizard robes.",
			"🐉 Earn a free drink for every dragon you slay (imaginary ones count).",
			"🎩 Join our Secret Society of Snack Enthusiasts — handshake required.",
			"🪙 Collect 10 loyalty coins, trade them for eternal bragging rights.",
			"🦸 Get a free appetizer if you can recite the menu backwards.",
			"🕺 One dance move = one free dipping sauce."
		];

		rewards.forEach(reward => {
			const li = document.createElement('li');
			li.textContent = reward;
			ul.appendChild(li);
		});

		return ul;
	};

	return { init, NAMESPACE };
})();
