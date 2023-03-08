import React, { useEffect } from "react";
import { RefreshIcon } from "./icons";
import { htmlToText } from "./utils";

function PopUpResume(props) {
    const [subAction, setSubAction] = React.useState(props.subAction);
    const [lastSubAction, setLastSubAction] = React.useState(props.subAction);
    const [output, setOutput] = React.useState(0);
    const source = htmlToText(props.compose.compose.dom('quoted_reply')[0].value)
    const openDropdown = () => {
        const dropdown = document.getElementById("dropdown2");
        if (dropdown.classList.contains("hidden")) {
      
          document.getElementById("svgInset2").classList.remove("rotate-0");
          document.getElementById("svgInset2").classList.add("rotate-180");
          dropdown.classList.remove("hidden");
        } else {
      
          document.getElementById("svgInset2").classList.remove("rotate-180");
          document.getElementById("svgInset2").classList.add("rotate-0");
          dropdown.classList.add("hidden");
        }
    }
    //Event listener on click somewhere else close dropdown
    document.addEventListener("click", function (event) {
        const dropdown = document.getElementById("dropdown2");
        if(dropdown === null) return;
        if (event.target.closest("#multiLevelDropdownButton2")) return;
        document.getElementById("svgInset2").classList.remove("rotate-180");
        document.getElementById("svgInset2").classList.add("rotate-0");
        dropdown.classList.add("hidden");
    });

    useEffect(() => {
        setOutput(0);
        props.action.function(source, subAction?.name)
        .then(data => {
            setOutput(data);
        })
    }, [lastSubAction])
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div onClick={() => props.setAction(0)} className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white text-left shadow-xl transform transition-all sm:my-8 sm:align-middle w-3/5 rounded-lg" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-t-lg">
                        <div>
                            <div class="absolute right-2" onClick={() => props.setAction(0)}>
                                <svg class="cursor-pointer" width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 38.1395C30.0182 38.1395 38.1395 30.0182 38.1395 20C38.1395 9.98181 30.0182 1.86047 20 1.86047C9.98181 1.86047 1.86047 9.98181 1.86047 20C1.86047 30.0182 9.98181 38.1395 20 38.1395ZM20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z" fill="#5598D8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.2621 14.7379C25.6254 15.1011 25.6254 15.6901 25.2621 16.0534L16.0533 25.2622C15.69 25.6255 15.101 25.6255 14.7378 25.2622C14.3745 24.899 14.3745 24.31 14.7378 23.9467L23.9466 14.7379C24.3099 14.3746 24.8989 14.3746 25.2621 14.7379Z" fill="#5598D8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.2621 25.2623C24.8989 25.6255 24.3099 25.6255 23.9466 25.2623L14.7378 16.0534C14.3745 15.6902 14.3745 15.1012 14.7378 14.7379C15.101 14.3746 15.69 14.3746 16.0533 14.7379L25.2621 23.9467C25.6254 24.31 25.6254 24.899 25.2621 25.2623Z" fill="#5598D8"/>
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-500 flex" id="modal-title">
                                    <svg class="self-center mr-2" width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7119 2.36695V5.28869L0 6.25681H16.2714L12.7119 6.83652V8.15053L2.77762 8.90705H19.05L12.7119 9.7399V11.8993L3.40526 12.6075H19.6776L12.7119 13.3457C12.7119 14.0752 13.3029 14.6674 14.0308 14.6674H30.6811C31.409 14.6674 32 14.0752 32 13.3457V2.36695L22.3559 9.06164L12.7119 2.36695ZM32 0.754395H12.7119L22.3559 7.44908L32 0.754395Z" fill="#00ADEF"/>
                                    </svg>
                                    Quinn Assistant
                                </h3>
                                <div className="mt-2 w-100">

                                    <h2 className="text-sm text-black" >
                                        {props.action.label}
                                    </h2>
                                    <div class="w-100 h-100 max-h-96 overflow-scroll inputArea mt-5 mb-5" id="resume" name="resume" readonly>
                                        {output == 0 ? 
                                            <div class="spinner-container p-4">
                                                <div class="spinner"></div>
                                            </div>
                                            : 
                                            <p className="text-sm text-gray-500 p-4">
                                                {output}
                                            </p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-between rounded-b-lg">
                        <div class="flex items-center">
                            {
                                lastSubAction == subAction ? 
                                null :
                                <div class="refreshButton" onClick={() => setLastSubAction(subAction)}>
                                    <RefreshIcon/>
                                </div>

                            }
                            <button onClick={() => props.setAction(0)} type="button" className="w-full inline-flex justify-center rounded-md border-transparent px-4 py-2 buttonConfirm text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                                Fermer
                            </button>
                        </div>
                        <div>
                        {
                            props.action.subActions &&
                            <>
                                <button id="multiLevelDropdownButton2" onClick={() => openDropdown()} data-dropdown-toggle="dropdown" class="shadow rounded-lg px-4 py-2.5 mx-2.5 w-48 text-center inline-flex items-center justify-between focus:outline-none" type="button">
                                    <div class="flex items-center">
                                    <svg width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7119 2.36695V5.28869L0 6.25681H16.2714L12.7119 6.83652V8.15053L2.77762 8.90705H19.05L12.7119 9.7399V11.8993L3.40526 12.6075H19.6776L12.7119 13.3457C12.7119 14.0752 13.3029 14.6674 14.0308 14.6674H30.6811C31.409 14.6674 32 14.0752 32 13.3457V2.36695L22.3559 9.06164L12.7119 2.36695ZM32 0.754395H12.7119L22.3559 7.44908L32 0.754395Z" fill="#00ADEF"/>
                                    </svg>
                                    <span class="text-neutral-700 px-2 font-light text-sm whitespace-nowrap overflow-hidden w-24" style={{textOverflow:'ellipsis'}}>
                                        {subAction?.label}
                                    </span>
                                    </div>
                                    <svg class="w-4 h-4 ml-2 rotate-0 transition-transform duration-300 ease-in-out" id="svgInset2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>

                                <div id="dropdown2" class="z-10 hidden bg-white mx-2.5 my-2 rounded-lg shadow w-48 absolute">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton2">
                                        {props.action.subActions.map((subAction, index) => {
                                            return(
                                                <li>
                                                    <a onClick={() => setSubAction(subAction)} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{subAction.label}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </>
                        }
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

  
export default PopUpResume;