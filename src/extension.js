"use strict";
const loaderId = setInterval(() => {
    if (!window._gmailjs) {
        return;
    }

    clearInterval(loaderId);
    startExtension(window._gmailjs);
}, 100);

function startExtension(gmail) {
    window.gmail = gmail;

    gmail.observe.on("load", () => {
        const userEmail = gmail.get.user_email();
        gmail.observe.on("compose", (compose) => {
            var compose_ref = gmail.dom.composes()[0];
            gmail.tools.add_compose_button(compose_ref, 'Générer une réponse', function() {
                compose.body(htmlToText(compose.dom('quoted_reply')[0].value));
            // Code here
            }, 'Custom Style Classes');
            })
    });
}

function htmlToText(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText;
  }