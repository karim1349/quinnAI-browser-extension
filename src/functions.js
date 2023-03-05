import { htmlToText } from "./utils";

const API_URL = "https://quinn-development.herokuapp.com/";

async function correctOrthography(body, conversation) {
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

export { correctOrthography }