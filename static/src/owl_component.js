/** @odoo-module */

import {
    Component,
    xml,
    mount,
    whenReady,
    useState,
    onWillStart,
} from "@odoo/owl";

import { jsonrpc } from "@web/core/network/rpc_service";

import { templates } from "@web/core/assets";

export class OwlMainComponent extends Component {
    setup() {
        console.log("inside setup method");
        this.state = useState({
            counter: 0,
        });
        this.date = new Date().toLocaleString();

        onWillStart(async () => {
            const data = await jsonrpc(
                "/web/dataset/call_kw/product.template/search_read",
                {
                    model: "product.template",
                    method: "search_read",
                    args: [],
                    kwargs: {
                        limit: 10,
                    },
                }
            );
            console.log("data", data);
            this.state.products = data;
        });
    }
    increaseCounter() {
        this.state.counter++;
    }
    get someList() {
        return [1, 2, 3, 4, 5];
    }
}

OwlMainComponent.template = "qweb_tutorials.someTemplate";

whenReady(() => {
    const element = document.querySelector(".oe_website_sale");
    if (element) {
        mount(OwlMainComponent, element, { templates });
    }
});
