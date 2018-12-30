import { LitElement, html } from '@polymer/lit-element/';
import { navBarStyles } from './navBarStyles.js';
import '../selectBox/selectBox.js';
import '../api/api.js';

class NavBar extends LitElement {
    constructor() {
        super();
        this.months = [{1: 'January'},{2: 'February'}, {3: 'March'}, {4: 'April'}, {5: 'May'}, {6: 'June'},{7: 'July'}, {8: 'August'}, {9: 'September'}, {10: 'October'}, {11: 'November'}, {12: 'December'}];
        this.years = [{2015: '2015'}, {2016: '2016'}, {2017: '2017'},{2018: '2018'}];
    }
    render() {
        const {months, years} = this;
        return html`
            <style>
                ${navBarStyles}
            </style>

            <div class='nav-bar'>
                <api-unicorn></api-unicorn>
                <select-box .selectBoxOptions=${years}></select-box>
                <select-box .selectBoxOptions=${months}></select-box>
            </div>
        `;
    }
}

customElements.define('nav-bar', NavBar);