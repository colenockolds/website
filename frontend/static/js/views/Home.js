import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Welcome to My Webpage</h1>
            <p> 
                Hello, my name is Cole Nockolds and I am a senior at the University of Texas at Austin studying Computational Engineering. This website is meant to showcase some fun JavaScript                       projects that I am working on in my free time.
            </p>
            <p> 
                <a href="/updates" data-link>Recent Updates</a> 
            </p>
        `;
    }
}
