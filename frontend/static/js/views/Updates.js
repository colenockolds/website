import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Updates");
    }

    async getHtml() {
        return `
            <h1>Recent Updates</h1>
            <p>
                This website project began on September 16th of 2022 as a way for me to share the coding projects I am currently enjoying. My first project is an interactive web application to help                  students learn how to read music. The app is mostly focused on guitar players but should work with any instrument. I plan on making frequent updates to this site and including more                   projects that interest me in the future. -Cole 9/18/22
            </p>
            <p>
                <a href="/" data-link>Return to Home</a>
            </p>
        `;
    }
}

