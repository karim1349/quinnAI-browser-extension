
function htmlToText(html) {
    const div = document.createElement("div");
    div.innerHTML = html.replace(/<br\s*\/?>/gi, "\n");
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
      .myUl {
        list-style-type: none !important;
        padding-inline-start: 0px !important;
        margin-block-start: 0px !important;
        margin-block-end: 0px !important;
      }
      .myUl li {
        list-style-type: none !important;
      }
        ol, ul
         {
          list-style: auto;
          padding-inline-start: 40px;
          margin-block-start: 13px;
          margin-block-end: 13px;
        }
        ul li {
          list-style-type: disc;
        }
      .headline {
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 8px;
          gap: 8px;
          border-radius: 15px;
          visibility:visible; 
          background:white;
          border: 1px solid #1DA1F2;
          margin-right: 8px;
          display:flex;
          cursor: pointer;
      }
  
      .headline:hover {
          background: rgba(0, 114, 198, 0.1);
          border: 1px solid rgba(0, 114, 198, 0.1);
      }
  
      .container {
          display: flex;
          padding-left: 66px;
          margin-top: 20px;
      }
      .spinner-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      
      .spinner {
        border: 2px solid rgba(0, 0, 0, 0.1);
        border-left-color: #1DA1F2;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        animation: spin 1s linear infinite;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .buttonConfirm {
        background: linear-gradient(45deg, #3CDDF3 0%, #1DA1F2 48.69%, #1DA1F2 48.7%, #4FCEF3 100%);
      }

      .buttonConfirm:hover {
        background: none;
        background-color:#0B3F75;
      }
      .inputArea {
        background: rgba(236, 246, 253, 0.64);
        border-radius: 20px;
      }

      .inputArea::-webkit-scrollbar {
        background-color: transparent;
        display: none;
      }

      .scrollableDropdown::-webkit-scrollbar {
        background-color: transparent;
        width:8px;
      }

      .scrollableDropdown::-webkit-scrollbar-thumb {
        background-color: grey;
        border-radius: 10px;
      }
      #dropdown {
        top: -11.5rem;
      }

      .refreshButton {
        border: 1px solid #1DA1F2;
        border-radius: 10px;
        height: 30px;
        width: 30px;
        padding:5px;
        margin-left:20px;
      }

      .refreshButton:hover {
        cursor: pointer;
      }

      .popUpTextarea {
        border: none;
        outline: none;
        resize: none;
        min-width:100%;
        max-height: 350px;
        white-space: pre-line;
      }

      .popUpTextarea::-webkit-scrollbar {
        background-color: transparent;
        width:8px;
      }

      .composeTextMenu {
        position: absolute;
        display: block;
        z-index:9999;
      }

      .hiddenComposeTextMenu {
        display: none;
      }

      .bg-lightblue1 {
        background-color: #EFF5FF;
        border-bottom: 1px solid #E1E8ED;
      }

      .bg-lightblue2 {
        background-color: #F3F9FE;
        border-bottom: 1px solid #E1E8ED;
      }
      
      .scoringButtonContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }


      .score {
        background-color:#87CEEB;
        border-radius: 10px;
        width:45px;
        height:20px;
        font-size: 13px;
        justify-content: center;
        line-height: 15px !important;
        margin-right: 10px;
        color:#E4E5E9;
      }

      .aAw {
        max-width:250px !important;
      }
      `;

      document.head.appendChild(style);
  }

  export {htmlToText, textToHtml, addStyle }