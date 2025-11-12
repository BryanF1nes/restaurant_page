const createFormField = (labelText, type, name, placeholder = "") => {
	const render = () => {
		const wrapper = document.createElement("div");
		wrapper.classList.add("form-group");

		const label = document.createElement("label");
		label.textContent = labelText;
		label.setAttribute("for", name);

		let input;
		if (type === "textarea") {
			input = document.createElement("textarea");
		} else {
			input = document.createElement("input");
			input.type = type;
		}

		input.name = name;
		input.id = name;
		input.placeholder = placeholder;
		input.classList.add("form-control");

		wrapper.append(label, input);
		return wrapper;
	};

	return { render };
};

export const ContactModule = (() => {
	const NAMESPACE = "Contact";

	const init = () => {
		render();
	};

	const render = () => {
		const content = document.getElementById("content");
		content.innerHTML = "";

		const title = createTitle();
		const form = createContactForm();

		content.append(title, form);
	};

	const createTitle = () => {
		const h1 = document.createElement("h1");
		h1.classList.add("title");
		h1.textContent = NAMESPACE;
		return h1;
	};

	const createContactForm = () => {
		const form = document.createElement("form");
		form.classList.add("contact-form");

		const nameField = createFormField("Name", "text", "name", "Name");
		const emailField = createFormField("Email", "email", "email", "Email");
		const phoneField = createFormField("Phone", "tel", "phone", "Phone");
		const messageField = createFormField("Message", "textarea", "message", "Enter your message...");

		const submitButton = document.createElement("button");
		submitButton.type = "submit";
		submitButton.textContent = "Send Message";
		submitButton.classList.add("submit-btn");

		form.append(
			nameField.render(),
			emailField.render(),
			phoneField.render(),
			messageField.render(),
			submitButton
		);

		form.addEventListener("submit", handleSubmit);
		return form;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());

		console.log("Form submitted:", data);
		alert(`This actually doesn't go anywhere, but thanks for contacting us ${data.name}!`);
		e.target.reset();
	};

	return { init, NAMESPACE };
})();
