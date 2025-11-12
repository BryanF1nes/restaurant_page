export const AboutModule = (function() {
	const NAMESPACE = 'About';
	const init = () => {
		render();
	}

	const render = () => {
		const content = document.getElementById('content');
		const title = createTitle();
		const body = generateContent();
		return content.append(title, body);
	}

	const generateContent = () => {
		const p = document.createElement('p');
		p.textContent = "This is the about page. We're so glad you're here and looking at the site. However please be aware this is just a creation of a local taphouse in my area. All credit and design goes to the original creator. I simply just took what they created in order to have something to show upon completing a restaurant project for The Odin Project. While I have your attention to this I will go ahead and talk a bit about this project and how it was created. The main focus of this project was to use the Module Pattern and Webpack in conjuction to bring a website to life. Some of the main focuses I personally wanted to gain from this project was using Factory Functions and the Module Pattern in order to have as little global variables/objects/etc from inheriting the main JavaScript file. I also wanted to reduce as much HTML as possible, while this wasn't necessary it was something I wanted to do as a personal goal of mine. I could still go back and add a new module to handle the footer as well but I'll leave that for another day. The tech stack is as follows: JavaScript, HTML, CSS, and Webpack."

		return p;
	}

	const createTitle = () => {
		const h1 = document.createElement('h1');
		h1.classList.add('title');

		h1.textContent = NAMESPACE;

		return h1;
	}

	return { init, NAMESPACE };
})();
