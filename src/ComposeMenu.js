import React from "react";
import { textToHtml } from "./utils";
function ComposeMenu(compose) {
  const gmail = window.gmail;
  const API_URL = "https://quinn-development.herokuapp.com/";
  const [label, setLabel ] = React.useState(0);

  const setProfessionalMode = () => {
    setLabel("Mode professionnel");
  }

  const correctOrthograph = () => {
    setLabel("Corriger l'orthographe");
    setLabel("Chargement ...") 
    const body = compose.compose.body()
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
        setLabel("Corriger l'orthographe")
        compose.compose.body(textToHtml(data.body));
    })
  }
  return (
    <div>
      <button id="multiLevelDropdownButton" onClick={() => openDropdown()} data-dropdown-toggle="dropdown" class="shadow rounded-lg px-4 py-2.5 mx-2.5 w-64 text-center inline-flex items-center justify-between focus:outline-none" type="button">
        <div class="flex items-center">
          <svg width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.7119 2.36695V5.28869L0 6.25681H16.2714L12.7119 6.83652V8.15053L2.77762 8.90705H19.05L12.7119 9.7399V11.8993L3.40526 12.6075H19.6776L12.7119 13.3457C12.7119 14.0752 13.3029 14.6674 14.0308 14.6674H30.6811C31.409 14.6674 32 14.0752 32 13.3457V2.36695L22.3559 9.06164L12.7119 2.36695ZM32 0.754395H12.7119L22.3559 7.44908L32 0.754395Z" fill="#00ADEF"/>
          </svg>
          <span class="text-neutral-700 px-2 font-light text-sm whitespace-nowrap overflow-hidden w-40" style={{textOverflow:'ellipsis'}}>
            {
              label == 0 ? "Quinn AI" : label == "Chargement ..." ? 
              <div class="spinner-container">
                <div class="spinner"></div>
              </div>
              :
              label
            }
          </span>
        </div>
        <svg class="w-4 h-4 ml-2 rotate-0 transition-transform duration-300 ease-in-out" id="svgInset" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      <div id="dropdown" class="z-10 hidden bg-white mx-2.5 my-2 rounded-lg shadow w-64 absolute">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
            <li>
              
              <a onClick={() => setProfessionalMode()} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mode professionnel</a>
            </li>
            <li>
              <a onClick={() => correctOrthograph()} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Corriger l'orthographe</a>
            </li>
            <li>
              <a onClick={() => setLabel("Résumer la conversation")} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Résumer la conversation</a>
            </li>
          </ul>
      </div>

    </div>
    
  );
}
//Event listener on click somewhere else close dropdown
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdown");
  if (event.target.closest("#multiLevelDropdownButton")) return;
  document.getElementById("svgInset").classList.remove("rotate-180");
  document.getElementById("svgInset").classList.add("rotate-0");
  dropdown.classList.add("hidden");
});
function openDropdown() {
  const dropdown = document.getElementById("dropdown");
  if (dropdown.classList.contains("hidden")) {

    document.getElementById("svgInset").classList.remove("rotate-0");
    document.getElementById("svgInset").classList.add("rotate-180");
    dropdown.classList.remove("hidden");
  } else {

    document.getElementById("svgInset").classList.remove("rotate-180");
    document.getElementById("svgInset").classList.add("rotate-0");
    dropdown.classList.add("hidden");
  }
}

export default ComposeMenu;