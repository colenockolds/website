import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Contact Me");
    }

    async getHtml() {
        return `
            <link rel="stylesheet" href="index.css">
            <h1>Contact Me</h1>
            <div class="container">
                <form onsubmit="sendEmail(); reset(); return false;">
                    <h3>Input Your Information</h3>
                    <input type="text" id="name" placeholder="Your Name" required>
                    <input type="email" id="email" placeholder="Your Email" required>
                    <input type="text" id="phone" placeholder="Your Phone Number" required>
                    <textarea id="message" rows="6" placeholder="Your Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            <p>
                <a href="/" data-link>Return Home</a>
            </p>
            <script src="https://smtpjs.com/v3/smtp.js"></script>
            <script src="https://smtpjs.com/v3/smtp.js">
                function sendEmail() {
                    Email.send({
                        Host : "smtp.gmail.com",
                        Username : "cole.nockolds@gmail.com",
                        Password : "",
                        To : 'cole.nockolds@gmail.com',
                        From : document.getElementById("email").value,
                        Subject : "New Contact from Website",
                        Body : "Name: " + document.getElementById("name").value
                            + "<br> Email: " + document.getElementById("email").value 
                            + "<br> Phone Number: " + document.getElementById("phone").value 
                            + "<br> Message: " + document.getElementById("message").value
                    }).then(
                        message => alert("Message Sent Successfully")
                    );
                }
            </script>
        `;
    }
}

