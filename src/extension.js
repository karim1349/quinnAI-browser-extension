"use strict";

const api_url = "https://quinn-development.herokuapp.com/";
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
        gmail.observe.on("compose", async (compose) => {
            addStyle();
            var compose_ref = gmail.dom.composes()[0];
            var container = document.createElement('div');
            container.className = 'container';
            await compose.$el[0].appendChild(container);
            const orthographeButton = gmail.tools.add_compose_button(compose, "Corriger l'orthographe", function() {
                orthographeButton[0].textContent = "Chargement ..." 
                const body = compose.body()
                //Api call to send the response
                fetch(api_url + 'api/emails/orthographe/', {
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
                })
            }, 'Custom Style Classes');

            await fetch(api_url + 'api/emails/generate_headlines/', {
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

function addStyle() {

    var style = document.createElement('style');
    style.innerHTML = `
    .headline {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 24px;
        gap: 8px;
        border-radius: 15px;
        visibility:visible; 
        background:white;
        border: 1px solid #1DA1F2;
        margin-right: 8px;
    }

    .headline:hover {
        background: rgba(0, 114, 198, 0.1);
        border: 1px solid rgba(0, 114, 198, 0.1);
    }

    .container {
        display: flex;
        margin-left: 66px;
        margin-top: 20px;
    `;
    document.head.appendChild(style);
}

function addHeadlineButton(container, text, compose) {
    var div = document.createElement('a');
    div.innerText = text;
    div.className = 'headline';
    div.addEventListener('click', function() {
        fetch(api_url + 'api/emails/generate_responses/', {
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
            compose.body(textToHtml(data.body));
        })
    });
    container.appendChild(div);
    console.log(container)
}