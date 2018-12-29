import { LitElement, html } from '@polymer/lit-element/';

class SelectBox extends LitElement {
    
    static get properties() {
        return {
            selectBoxOptions: { 
                type: Array 
            }
        };
    }

    constructor() {
        super();

    }
    render() {
        const {selectBoxOptions} = this;
        return html`
            <div>
                <select>
                ${selectBoxOptions.map(x => 
                    Object.entries(x).map(([key, value]) => html`<option value="${key}">${value}</option>`)
                    )}
                   
                </select>
            </div>
        `;
    }
}

customElements.define('select-box', SelectBox);