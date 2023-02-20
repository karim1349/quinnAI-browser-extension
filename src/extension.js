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
            const generateButton = gmail.tools.add_compose_button(compose, "Générer une réponse", function() {
                generateButton[0].textContent = "Chargement ..." 
                const existing_body = compose.body()
                //Api call to send the response
                fetch('https://quinn-stage.herokuapp.com/api/email/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "source": htmlToText(compose.dom('quoted_reply')[0].value) + existing_body,
                        "user": userEmail
                    })
                })
                .then(response => {           
                    return response.json();
                })
                .then(data => { 
                    generateButton[0].textContent = "Générer une réponse" 
                    compose.body(textToHtml(data.body));
                    console.log(compose)
                })
            }, 'Custom Style Classes');
            const orthographeButton = gmail.tools.add_compose_button(compose, "Corriger l'orthographe", function() {
                orthographeButton[0].textContent = "Chargement ..." 
                const body = compose.body()
                //Api call to send the response
                fetch('https://quinn-stage.herokuapp.com/api/orthographe/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "source": body
                    })
                })
                .then(response => {           
                    return response.json();
                })
                .then(data => { 
                    orthographeButton[0].textContent = "Corriger l'orthographe" 
                    compose.body(textToHtml(data.body));
                    console.log(compose)
                })
            }, 'Custom Style Classes');
            })
    });
}

function htmlToText(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText;
  }
function textToHtml(text) {
    const div = document.createElement("div");
    div.innerText = text;
    div.innerHTML = div.innerHTML.replace(/&lt;br&gt;/g, "").replace(/&lt;br\/&gt;/g, "");
    return div.innerHTML;
  }