import { htmlToText } from "./utils";

const API_URL = "https://0d2c-2001-861-3742-d5a0-8565-911-39df-2b5e.eu.ngrok.io/";

async function correctOrthography(body) {
    //setLabel("Corriger l'orthographe");
    //setLabel("Chargement ...") 
    //Api call to send the response
    const data = await fetch(API_URL + 'api/emails/orthographe/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "source": htmlToText(body),
            "label_id": 0
        })
    })
    .then(async response => {
        return response.json();
    })
    .then(data => {
        return data.body
    })

    return data;
}

async function summarizeEmail(source, subAction) {
    const data = await fetch(API_URL + 'api/emails/summarize_conversation/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "source": htmlToText(source),
            "sub_action": subAction
        })
    })
    .then(async response => {
        return response.json();
    })
    .then(data => {
        return data.body
    })
    return data;
}

async function translate(body, subAction) {
    const data = await fetch(API_URL + 'api/emails/translate_email/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "source": htmlToText(body),
            "sub_action": subAction
        })
    })
    .then(async response => {
        return response.json();
    })
    .then(data => {
        return data.body
    })
    return data;
}

async function meliorate(body, subAction) {
    const data = await fetch(API_URL + 'api/emails/meliorate_email/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "source": htmlToText(body),
            "sub_action": subAction
        })
    })
    .then(async response => {
        return response.json();
    })
    .then(data => {
        return data.body
    })
    return data;
}

async function change_tone_email(body, subAction) {
    const data = await fetch(API_URL + 'api/emails/change_tone_email/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "source": htmlToText(body),
            "sub_action": subAction
        })
    })
    .then(async response => {
        return response.json();
    })
    .then(data => {
        return data.body
    })
    return data;
}

async function detect_actions(body) {
    const data = await fetch(API_URL + 'api/emails/detect_actions_email/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "source": htmlToText(body)
        })
    })
    .then(async response => {
        return response.json();
    })
    .then(data => {
        return data.body
    })
    return data;
}

async function redact_answer(body) {
    const data = await fetch(API_URL + 'api/emails/redact_answer_email/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "source": htmlToText(body),
            "sender": await window.gmail.get.user_email()
        })
    })
    .then(async response => {
        return response.json();
    })
    .then(data => {
        return data.body
    })
    return data;
}

export { correctOrthography, summarizeEmail, translate, meliorate, change_tone_email, detect_actions, redact_answer }