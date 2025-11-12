import menus from "./db.json";

export const MenuModule = (function() {
	const NAMESPACE = 'Menu';
	const init = () => {
		render();
	}

	const render = () => {
		const content = document.getElementById('content');
		const cardContainer = createCard();
		const pageTitle = createTitle();

		content.append(pageTitle, cardContainer);
	}

	const createCard = () => {
		const container = document.createElement('div');
		container.classList.add('menu-container')
		menus.menus.forEach((item) => {
			const menuContainer = document.createElement('div');
			const image = document.createElement('img');
			const p = document.createElement('p');

			const imageSrc = item.url ? require(`../assets/${item.url}`) : undefined;
			image.src = imageSrc;

			p.textContent = item.name;

			menuContainer.classList.add('menu-items');
			menuContainer.append(image, p);
			container.appendChild(menuContainer);
		})

		return container;
	}

	const createTitle = () => {
		const h1 = document.createElement('h1');
		h1.classList.add('title');

		h1.textContent = NAMESPACE + `s`;

		return h1;
	}

	return { init, NAMESPACE };
})();
