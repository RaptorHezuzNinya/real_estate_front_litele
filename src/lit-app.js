import { LitElement, html } from 'lit-element/';
import { styles } from './lit-app-styles';
import './components/nav-bar/nav-bar';
import './components/hello-world/hello-world';
import './components/tenant-component/tenant-component';

class LitApp extends LitElement {
	render() {
		return html`
			<style>
				${styles}
			</style>

			<div class="app"><nav-bar></nav-bar></div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<hello-world
				greeting="unicorn"
				prop="yoe"
				prop3="yoe"
				prop2="yoe"
				prop5="yoe"
				prop4="test"
			></hello-world>

			<tenant-component firstname="yoeir" lastname=" Maas"></tenant-component>
		`;
	}
}

customElements.define('lit-app', LitApp);
