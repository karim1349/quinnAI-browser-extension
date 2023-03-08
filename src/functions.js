import { htmlToText } from "./utils";

const API_URL = "https://0d2c-2001-861-3742-d5a0-8565-911-39df-2b5e.eu.ngrok.io/";

async function correctOrthography(body) {
    console.log('Correct orthography');
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
        console.log(data)
        return data.body
    })

    return data;
}

async function summarizeEmail(source, subAction) {
    console.log('Summarize email');
    console.log(subAction);
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
        console.log(data)
        return data.body
    })
    return data;
}

async function translate(body, subAction) {
    console.log('Translate email');
    console.log(subAction);
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
        console.log(data)
        return data.body
    })
    return data;
}

async function meliorate(body, subAction) {
    console.log('Meliorate email');
    console.log(subAction);
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
        console.log(data)
        return data.body
    })
    return data;
}

async function change_tone_email(body, subAction) {
    console.log('Change tone email');
    console.log(subAction);
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
        console.log(data)
        return data.body
    })
    return data;
}

async function detect_actions(body) {
    console.log('Detect actions');
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
        console.log(data)
        return data.body
    })
    return data;
}

export { correctOrthography, summarizeEmail, translate, meliorate, change_tone_email, detect_actions }