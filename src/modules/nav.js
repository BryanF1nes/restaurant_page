import { AboutModule as About } from "./about.js";
import { MenuModule as Menu } from "./menu.js";

export const HeaderModule = (function() {
	const menuItems = ['Menu', 'About', 'Rewards', 'Contact'];

	const init = () => {
		render();
	};

	const render = () => {
		const body = document.querySelector('body');
		const content = document.getElementById('content');

		body.insertBefore(createNav(), content);
	};

	const createNav = () => {
		const headerEl = document.createElement('header');
		const nav = document.createElement('nav');
		const firstContainer = document.createElement('div');
		const logoContainer = document.createElement('div');
		const navContainer = document.createElement('div');
		const orderOnlineContainer = document.createElement('div');

		firstContainer.classList.add('first-container');
		logoContainer.classList.add('logo-container');
		navContainer.classList.add('nav-container');
		orderOnlineContainer.classList.add('order-online-container');

		menuItems.map((item) => {
			const button = document.createElement('button');
			button.setAttribute('id', item);
			button.textContent = item;

			button.addEventListener('click', (e) => handleClick(e));

			navContainer.appendChild(button);
		});

		const aHref = document.createElement('a');
		const button = document.createElement('button');
		const span = document.createElement('span');

		aHref.textContent = 'Choose a location';
		span.textContent = 'Order Online';

		button.appendChild(span);

		firstContainer.append(logoContainer, navContainer);
		orderOnlineContainer.append(aHref, button);

		nav.append(firstContainer, orderOnlineContainer);

		headerEl.appendChild(nav);

		return headerEl;
	};

	const handleClick = (e) => {
		const items = [Menu, About];
		const content = document.getElementById('content');
		content.innerHTML = ``;

		const context = e.target.id;

		items.filter((item) => {
			if (context == item.NAMESPACE) {
				return item.init();
			} else {
				return null
			}
		});

	}

	return { init }
})();
