"use strict";
import {addStyle, htmlToText, textToHtml } from "./utils";
import React from "react";
import { createRoot } from "react-dom/client";
import ComposeMenu from "./ComposeMenu";
const API_URL = "https://quinn-development.herokuapp.com/";
const LOADER_ID = setInterval(checkGmailJS, 100);

function checkGmailJS() {
    if (!window._gmailjs) return;
    clearInterval(LOADER_ID);
    startExtension(window._gmailjs);
}
function startExtension(gmail) {
    window.gmail = gmail;
    var linkToTailwind = document.createElement('link');
    linkToTailwind.rel = 'stylesheet';
    linkToTailwind.href = 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css';
    document.head.appendChild(linkToTailwind);
    var linkToFlowbite = document.createElement('link');
    linkToFlowbite.rel = 'stylesheet';
    linkToFlowbite.href = 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css';
    var scriptFlowbite = document.createElement('script');
    scriptFlowbite.src = 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js';
    document.head.insertBefore(linkToFlowbite, document.head.childNodes[0]);
    const userEmail = gmail.get.user_email();
    gmail.observe.on("load", () => {
        gmail.observe.on("compose", async (compose) => {
            addStyle();
            const button = document.createElement("td");
            document.getElementsByClassName("btC")[0].insertBefore(button, document.getElementsByClassName("btC")[0].childNodes[1]);
            const root = createRoot(button);
            root.render(<ComposeMenu compose={compose} />);
            const compose_ref = gmail.dom.composes()[0];
            var container = document.createElement('div');
            container.className = 'container';
            await compose.$el[0].appendChild(container);
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
                var headlines = data.body.split("|");
                
                for(var i = 0; i < 4; i++) {
                    addHeadlineButton(container, headlines[i], compose);
                }
            })
            })

    });
}


function addHeadlineButton(container, text, compose) {
    var div = document.createElement('div');

    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("width", "32");
    svgElement.setAttribute("height", "14");
    svgElement.setAttribute("viewBox", "0 0 32 14");
    svgElement.setAttribute("fill", "none");
    svgElement.style.minWidth = "25px";
    svgElement.style.maxWidth = "25px";

    // Create a path element and set its "d" attribute
    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M12.7119 1.61256V4.5343L0 5.50242H16.2714L12.7119 6.08213V7.39613L2.77762 8.15266H19.05L12.7119 8.98551V11.1449L3.40526 11.8531H19.6776L12.7119 12.5913C12.7119 13.3208 13.3029 13.913 14.0308 13.913H30.6811C31.409 13.913 32 13.3208 32 12.5913V1.61256L22.3559 8.30725L12.7119 1.61256ZM32 0H12.7119L22.3559 6.69469L32 0Z");
    pathElement.setAttribute("fill", "#00ADEF");

    // Add the path element to the SVG element
    svgElement.appendChild(pathElement);
    container.appendChild(div);
    div.innerHTML = " " + text;
    div.insertBefore(svgElement, div.firstChild);
    div.className = 'headline';
    div.addEventListener('click', function() {
        div.innerHTML = `
        <div class="spinner-container">
          <div class="spinner"></div>
          <div class="checkmark"></div>
        </div>`
        fetch(API_URL + 'api/emails/generate_responses/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "source": htmlToText(compose.dom('quoted_reply')[0].value),
                "sender": compose.from(),
                "headline": text,
                "label_id": 0
                })
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            div.innerHTML = text
            div.insertBefore(svgElement, div.firstChild);
            compose.body(textToHtml(data.body));
        })
    });
}
