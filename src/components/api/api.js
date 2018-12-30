import { LitElement, html } from '@polymer/lit-element';

class Api extends LitElement {
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
    get() {

    }
    render() {
        // return console.log(this.axios);
        
        this.axios.get('http://127.0.0.1:5000/tenants', { crossdomain: true })
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

customElements.define('api-unicorn', Api);



