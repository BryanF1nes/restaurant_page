import menus from "./db.json";

const createMenuItem = (name, url) => {
	const render = () => {
		const container = document.createElement('div');
		container.classList.add('menu-items');

		const image = document.createElement('img');
		image.src = url ? require(`../assets/${url}`) : '';
		image.alt = name;

		const caption = document.createElement('p');
		caption.textContent = name;

		container.append(image, caption);
		return container;
	}

	return { render };
};

export const MenuModule = (function() {
	const NAMESPACE = 'Menu';

	const init = () => {
		render();
	}

	const render = () => {
		const content = document.getElementById('content');
		content.innerHTML = "";

		const title = createTitle();
		const menuGrid = createMenuGrid(menus.menus);

		content.append(title, menuGrid);
	}

	const createMenuGrid = (menuData) => {
		const grid = document.createElement('div');
		grid.classList.add('menu-container');

		menuData.forEach((item) => {
			const menuItem = createMenuItem(item.name, item.url);
			grid.appendChild(menuItem.render());
		});

		return grid;
	}

	const createTitle = () => {
		const h1 = document.createElement('h1');
		h1.classList.add('title');
		h1.textContent = NAMESPACE + `s`;

		return h1;
	}

	return { init, NAMESPACE };
})();
