import { LitElement } from 'lit-element';

class ApiComponent extends LitElement {
    static get properties() {
        return {
            apiRoute: {
                type: String,
                value: ''
            }
        };
    }
    constructor() {
        super();
        this.axios = require('axios');

    }
    
    render() {
        
        this.axios.get('http://127.0.0.1:5000/tenants')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }
}

customElements.define('api-component', ApiComponent);



