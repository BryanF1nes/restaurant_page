import menus from "./db.json";

export const MenuModule = (function() {
	const NAMESPACE = 'Menu';
	const init = () => {
		render();
	}

	const render = () => {
		const content = document.getElementById('content');
		const cardContainer = createCard();
		return content.appendChild(cardContainer);
	}

	const createCard = () => {
		const container = document.createElement('div');
		container.classList.add('menu-container')
		menus.menus.map((item) => {
			const menuContainer = document.createElement('div');
			const image = document.createElement('img');
			const p = document.createElement('p');

			image.setAttribute('src', item.url);
			p.textContent = item.name;

			menuContainer.classList.add('menu-items');
			menuContainer.append(image, p);
			container.appendChild(menuContainer);
		})

		return container;
	}

	return { init, NAMESPACE };
})();
