import { LitElement, html } from '@polymer/lit-element/';
import { styles } from './lit-app-styles.js';
import './components/navBar/navBar.js';

class LitApp extends LitElement {
	render() {
		return html`
			<style>
				${styles}
			</style>

			<div class="app">
				<nav-bar></nav-bar>
			</div>
		`;
	}
}

customElements.define('lit-app', LitApp);
