
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
          padding: 8px;
          gap: 8px;
          border-radius: 15px;
          visibility:visible; 
          background:white;
          border: 1px solid #1DA1F2;
          margin-right: 8px;
          display:flex;
          cursor: pointer;
          flex: 1;
          flex-basis: 0;
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
      `;
      document.head.appendChild(style);
  }

  export {htmlToText, textToHtml, addStyle }