import { LitElement, html } from 'lit-element/';

class HelloWorld extends LitElement {
	static get properties() {
		return {
			greeting: { type: String }
		};
	}

	constructor() {
		super();
		this.greeting = 'hello!';
	}

	render() {
		const { greeting } = this;
		return html`
			<h1>${greeting}</h1>
			<p class="app-intro">To get started, edit <code>src/lit-app.js</code> and save to reload.</p>
		`;
	}
}

customElements.define('hello-world', HelloWorld);