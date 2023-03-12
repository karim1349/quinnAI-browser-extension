import React from "react";

function PopUpLabel() {
    const [popUp, setPopUp] = React.useState(false);
    
    return (
        <div className="flex justify-center">
            <button className="z-10 hover:bg-gray-100 rounded-full" style={{height:35}} onClick={() => setPopUp(true)}>
                <svg className="self-center mr-2" width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7119 2.36695V5.28869L0 6.25681H16.2714L12.7119 6.83652V8.15053L2.77762 8.90705H19.05L12.7119 9.7399V11.8993L3.40526 12.6075H19.6776L12.7119 13.3457C12.7119 14.0752 13.3029 14.6674 14.0308 14.6674H30.6811C31.409 14.6674 32 14.0752 32 13.3457V2.36695L22.3559 9.06164L12.7119 2.36695ZM32 0.754395H12.7119L22.3559 7.44908L32 0.754395Z" fill="#00ADEF"/>
                </svg>
            </button>
            {popUp && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">
                    <div className="absolute w-full h-full bg-gray-900 opacity-50" onClick={() => setPopUp(false)}></div>
                    <div className="inline-block align-bottom bg-white text-left shadow-xl transform transition-all sm:my-8 sm:align-middle w-3/5 rounded-lg" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg">
                            <div>
                                <div className="absolute right-2" onClick={() => setPopUp(false)}>
                                    <svg className="cursor-pointer" width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20 38.1395C30.0182 38.1395 38.1395 30.0182 38.1395 20C38.1395 9.98181 30.0182 1.86047 20 1.86047C9.98181 1.86047 1.86047 9.98181 1.86047 20C1.86047 30.0182 9.98181 38.1395 20 38.1395ZM20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z" fill="#5598D8"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M25.2621 14.7379C25.6254 15.1011 25.6254 15.6901 25.2621 16.0534L16.0533 25.2622C15.69 25.6255 15.101 25.6255 14.7378 25.2622C14.3745 24.899 14.3745 24.31 14.7378 23.9467L23.9466 14.7379C24.3099 14.3746 24.8989 14.3746 25.2621 14.7379Z" fill="#5598D8"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M25.2621 25.2623C24.8989 25.6255 24.3099 25.6255 23.9466 25.2623L14.7378 16.0534C14.3745 15.6902 14.3745 15.1012 14.7378 14.7379C15.101 14.3746 15.69 14.3746 16.0533 14.7379L25.2621 23.9467C25.6254 24.31 25.6254 24.899 25.2621 25.2623Z" fill="#5598D8"/>
                                    </svg>
                                </div>
                                <div className="mt-3 p-4 text-center sm:mt-0 sm:text-left">
                                    <h3 className="text-lg leading-6 font-medium text-gray-500 flex" id="modal-title">
                                        <svg className="self-center mr-2" width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.7119 2.36695V5.28869L0 6.25681H16.2714L12.7119 6.83652V8.15053L2.77762 8.90705H19.05L12.7119 9.7399V11.8993L3.40526 12.6075H19.6776L12.7119 13.3457C12.7119 14.0752 13.3029 14.6674 14.0308 14.6674H30.6811C31.409 14.6674 32 14.0752 32 13.3457V2.36695L22.3559 9.06164L12.7119 2.36695ZM32 0.754395H12.7119L22.3559 7.44908L32 0.754395Z" fill="#00ADEF"/>
                                        </svg>
                                        Quinn Assistant
                                    </h3>
                                    <table className="mt-2 w-100 pl-5 pr-5" style={{minWidth:'100%'}}>
                                        <thead>
                                            <tr className="h-16 bg-cyan-700 w-100 bg-lightblue1">
                                                <th className="pl-5">From</th>
                                                <th>Email</th>
                                                <th>Suggested labels</th>
                                                <th><input type={"checkbox"} className="ml-2" /></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="h-16 bg-cyan-700 w-100 bg-lightblue2">
                                                <td className="pl-5">adresse@email.com</td>
                                                <td>RDV lundi</td>
                                                <td>Professionnel</td>
                                                <td><input type={"checkbox"} className="ml-2" /></td>
                                            </tr>
                                            <tr className="h-16 bg-cyan-700 w-100 bg-lightblue2">
                                                <td className="pl-5">adresse@email.com</td>
                                                <td>RDV lundi</td>
                                                <td>Professionnel</td>
                                                <td><input type={"checkbox"} className="ml-2" /></td>
                                            </tr>
                                            <tr className="h-16 bg-cyan-700 w-100 bg-lightblue2">
                                                <td className="pl-5">adresse@email.com</td>
                                                <td>RDV lundi</td>
                                                <td>Professionnel</td>
                                                <td><input type={"checkbox"} className="ml-2" /></td>
                                            </tr>
                                            <tr className="h-16 bg-cyan-700 w-100 bg-lightblue2">
                                                <td className="pl-5">adresse@email.com</td>
                                                <td>RDV lundi</td>
                                                <td>Professionnel</td>
                                                <td><input type={"checkbox"} className="ml-2" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-between rounded-b-lg">
                        <div className="flex items-center">
                            <button onClick={() => console.log("labelize")} type="button" className="w-full inline-flex justify-center rounded-md border-transparent px-4 py-2 buttonConfirm text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                                Labelize
                            </button>
                        </div>
                        </div>



                    </div>
                </div>
            )}
        </div>
    );
}

export default PopUpLabel;