"use strict";
import {addStyle, htmlToText, textToHtml } from "./utils";
const API_URL = "https://quinn-development.herokuapp.com/";
const LOADER_ID = setInterval(checkGmailJS, 100);

function checkGmailJS() {
    if (!window._gmailjs) return;
    clearInterval(LOADER_ID);
    startExtension(window._gmailjs);
}
function startExtension(gmail) {
    window.gmail = gmail;
    const userEmail = gmail.get.user_email();
    gmail.observe.on("load", () => {
        gmail.observe.on("compose", async (compose) => {
            addStyle();
            const compose_ref = gmail.dom.composes()[0];
            var container = document.createElement('div');
            container.className = 'container';
            await compose.$el[0].appendChild(container);
            const orthographeButton = gmail.tools.add_compose_button(compose, "Corriger l'orthographe", function() {
                orthographeButton[0].textContent = "Chargement ..." 
                const body = compose.body()
                //Api call to send the response
                fetch(API_URL + 'api/emails/orthographe/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "source": body,
                        "label_id": 0
                    })
                })
                .then(response => {
                    return response.json();
                })
                .then(data => { 
                    orthographeButton[0].textContent = "Corriger l'orthographe" 
                    compose.body(textToHtml(data.body));
                })
            }, 'Custom Style Classes');

            await fetch(API_URL + 'api/emails/generate_headlines/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "source": htmlToText(compose.dom('quoted_reply')[0].value),
                    "user": userEmail,
                    "label_id": 0
                })
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                var headlines = data.body.split("|");
                headlines.forEach(headline => {
                    addHeadlineButton(container, headline, compose);
                }
                )
            })
            })

    });
}


function addHeadlineButton(container, text, compose) {
    var div = document.createElement('a');
    div.innerText = text;
    div.className = 'headline';
    div.addEventListener('click', function() {
        div.innerText = "Chargement ..."
        fetch(API_URL + 'api/emails/generate_responses/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "source": compose.body(),
                "sender": compose.from(),
                "headline": text,
                "label_id": 0
                })
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            div.innerText = text
            compose.body(textToHtml(data.body));
        })
    });
    container.appendChild(div);
    console.log(container)
}
