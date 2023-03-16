import React from "react";
import PopUpActions from "./PopUpActions";
import PopUpResume from "./PopUpResume";
import actions from "./constants";

function ComposeMenu({compose, popUpType, email}) {
  const [action, setAction ] = React.useState(0);
  const [subAction, setSubAction ] = React.useState(0);
  const [secondDropdown, setSecondDropdown ] = React.useState(0);
  const parentElementDom = popUpType == 2 ? compose.$el[0] : popUpType == 1 ? email.dom()[0].querySelector('.gs'): null ;
  const openDropdown = () => {
    const dropdown = parentElementDom.querySelector('#dropdown')
    if (dropdown.classList.contains("hidden")) {
  
      parentElementDom.querySelector("#svgInset").classList.remove("rotate-0");
      parentElementDom.querySelector("#svgInset").classList.add("rotate-180");
      dropdown.classList.remove("hidden");
    } else {
  
      parentElementDom.querySelector("#svgInset").classList.remove("rotate-180");
      parentElementDom.querySelector("#svgInset").classList.add("rotate-0");
      dropdown.classList.add("hidden");
      if(parentElementDom.querySelector("#doubleDropdown").classList.contains("hidden") == false){
        parentElementDom.querySelector("#doubleDropdown").classList.add("hidden");
      }
    }
  }

  const openSecondDropdown = (id, event) => {
    const oldId = secondDropdown;
    setSecondDropdown(id);
    let parentElement = event.target.parentElement;
    while(parentElement.tagName != "LI"){
      parentElement = parentElement.parentElement;
    }
    const secondDropdownElement = parentElementDom.querySelector("#doubleDropdown");
    console.log(parentElementDom.querySelector('#dropdown'))
    const firstDropdownWidth = parentElementDom.querySelector("#dropdown").offsetWidth;
    secondDropdownElement.style.top = parentElement.getBoundingClientRect().top + "px";
    secondDropdownElement.style.left = parentElement.getBoundingClientRect().left + firstDropdownWidth + (popUpType == 1 ? 0 : 10) + "px";

    if(parentElementDom.querySelector("#doubleDropdown").classList.contains("hidden") == true){
      parentElementDom.querySelector("#doubleDropdown").classList.remove("hidden");
    } else if (oldId == id){
      parentElementDom.querySelector("#doubleDropdown").classList.add("hidden");
    }
  }

  const executeAction = async (action, subAction) => {
    setAction(action)
    setSubAction(subAction)
  }
  //Event listener on click somewhere else close dropdown
  document.addEventListener("click", function (event) {
    const dropdown = parentElementDom.querySelector("#dropdown");
    if(!dropdown) return;
    if (event.target.closest("#multiLevelDropdownButton")) return;
    parentElementDom.querySelector("#svgInset").classList.remove("rotate-180");
    parentElementDom.querySelector("#svgInset").classList.add("rotate-0");
    dropdown.classList.add("hidden");
    if(parentElementDom.querySelector("#doubleDropdown").classList.contains("hidden") == false){
      parentElementDom.querySelector("#doubleDropdown").classList.add("hidden");
    }
  });
  return (
    <div>
      <button id="multiLevelDropdownButton" onClick={() => openDropdown()} data-dropdown-toggle="dropdown" className={"shadow rounded-lg px-4 py-2.5 mx-2.5 w-56 text-center inline-flex items-center justify-between focus:outline-none bg-white" + (popUpType == 1 ? " mt-8" : "")} type="button">
        <div className="flex items-center">
          <svg width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.7119 2.36695V5.28869L0 6.25681H16.2714L12.7119 6.83652V8.15053L2.77762 8.90705H19.05L12.7119 9.7399V11.8993L3.40526 12.6075H19.6776L12.7119 13.3457C12.7119 14.0752 13.3029 14.6674 14.0308 14.6674H30.6811C31.409 14.6674 32 14.0752 32 13.3457V2.36695L22.3559 9.06164L12.7119 2.36695ZM32 0.754395H12.7119L22.3559 7.44908L32 0.754395Z" fill="#00ADEF"/>
          </svg>
          <span className="text-neutral-700 px-2 font-light text-sm whitespace-nowrap overflow-hidden w-32" style={{textOverflow:'ellipsis'}}>
            {
              !action.label ? "Quinn AI" : action.label == "LOADING" ? 
              <div className="spinner-container">
                <div className="spinner"></div>
              </div>
              :
              action.label
            }
          </span>
        </div>
        <svg className="w-4 h-4 ml-2 rotate-0 transition-transform duration-300 ease-in-out" id="svgInset" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      <div id="dropdown" className={"z-10 hidden bg-white mx-2.5 my-2 rounded-lg shadow w-56 scrollableDropdown" + (popUpType == 2 ? " absolute h-40 overflow-y-scroll" : null)}>
        <ul className="myUl py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
          {actions.map((action, index) => {
            if(action.popUpType == popUpType) {
              if(action.subActions == undefined){
                return (
                  <li key={index}>
                    <a onClick={() => executeAction(action)} className="block flex py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                      {action.icon}
                      <span>{action.label}</span>
                    </a>
                  </li>
                )
              }
              else {
                return (
                  <li key={index}>
                    <a id="multiLevelDropdownButton" onClick={() => openSecondDropdown(action.name, event)} className="block py-2 flex hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white justify-between pr-2 cursor-pointer">
                      <div className="inline-flex">
                        {action.icon}
                        <span>{action.label}</span>
                      </div>
                      <svg className="self-center" width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.52796 0.467309C1.23376 0.175726 0.758893 0.177844 0.467309 0.472041C0.175726 0.766238 0.177844 1.24111 0.472041 1.53269L2.23501 3.28C2.9505 3.98914 3.44131 4.47718 3.77341 4.89071C4.096 5.2924 4.20668 5.55042 4.23613 5.7815C4.25462 5.92659 4.25462 6.07341 4.23613 6.2185C4.20668 6.44958 4.096 6.7076 3.77341 7.10929C3.44131 7.52282 2.9505 8.01086 2.23501 8.72L0.472041 10.4673C0.177844 10.7589 0.175726 11.2338 0.467309 11.528C0.758893 11.8222 1.23376 11.8243 1.52796 11.5327L3.32269 9.7539C3.99866 9.08396 4.55114 8.53641 4.94294 8.04854C5.35037 7.54122 5.64531 7.02628 5.72409 6.40816C5.75864 6.13714 5.75864 5.86286 5.72409 5.59184C5.64531 4.97372 5.35037 4.45878 4.94294 3.95146C4.55114 3.46359 3.99866 2.91604 3.32269 2.24609L1.52796 0.467309Z" fill="#151522"/>
                      </svg>
                    </a>
                  </li>
                )
              }
            }
          })}
        </ul>
      </div>

      <div id="doubleDropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 fixed hidden">
        {
          actions.map((action, index) => {
            if(action.name == secondDropdown){
              if(action.subActions != undefined){
                return (
                  <ul key={index} className="myUl py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                    {action.subActions.map((subAction, index) => {
                      return (
                        <li key={index}>
                          <a onClick={() => executeAction(action, subAction)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">{subAction.label}</a>
                        </li>
                      )
                    })}
                  </ul>
                )
              }
            }
          })
        }
      </div>
      {
        action.popUpType == 0 ?
          null
        : action.popUpType == 1 ? 
          <PopUpResume setAction={setAction} action={action} originalSubAction={subAction} email={email}/> 
        : action.popUpType == 2 ?
          <PopUpActions setAction={setAction} action={action} subAction={subAction} compose={compose}/> 
        : null
      }
    </div>
    
  );
}

export default ComposeMenu;