const createTextBlock = (text, className = "") => {
	const render = () => {
		const p = document.createElement("p");
		p.textContent = text;
		if (className) p.classList.add(className);
		return p;
	};

	return { render };
};

export const AboutModule = (() => {
	const NAMESPACE = "About";

	const init = () => {
		render();
	};

	const render = () => {
		const content = document.getElementById("content");
		content.innerHTML = "";

		const title = createTitle();
		const aboutInfo = generateAboutInfo();
		const story = generateStory();

		content.append(title, aboutInfo, story);
	};

	const createTitle = () => {
		const h1 = document.createElement("h1");
		h1.classList.add("title");
		h1.textContent = NAMESPACE;
		return h1;
	};

	const generateAboutInfo = () => {
		const text = `This is the about page. We're so glad you're here and exploring the site. 
This project represents a practice exercise inspired by a local taphouse’s design. 
The main focus of this build was to apply Object-Oriented Programming principles through the Module Pattern, Webpack bundling, and Factory Functions — all while minimizing global variables and dynamically generating HTML content.
The technologies used include JavaScript, HTML, CSS, and Webpack. Now enjoy this short story from ChatGPT about a Dragon and a brave knight.`;

		return createTextBlock(text, "about-info").render();
	};

	const generateStory = () => {
		const storyText = `Long ago, in a misty valley surrounded by mountains, 
a fearsome dragon named Emberwing guarded a treasure of untold worth. 
Every knight who challenged the beast vanished into legend — until one day, a brave knight named Ser Aldric appeared. 
Unlike the others, Aldric did not come with sword drawn, but with open hands and a promise: to share the dragon’s wisdom with the world.
Moved by courage and honesty, Emberwing spared the knight and granted him a single scale — 
a token of trust that shone brighter than any gold. 
From that day on, the dragon and the knight watched over the valley together — guardians not of treasure, but of peace.`;

		const storyBlock = createTextBlock(storyText, "about-story").render();

		const subtitle = document.createElement("h2");
		subtitle.textContent = "A Tale of Emberwing and the Brave Knight";
		subtitle.classList.add("subtitle");

		const container = document.createElement("div");
		container.classList.add("story-container");
		container.append(subtitle, storyBlock);

		return container;
	};

	return { init, NAMESPACE };
})();
