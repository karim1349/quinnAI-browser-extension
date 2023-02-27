
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
          padding: 8px 24px;
          gap: 8px;
          border-radius: 15px;
          visibility:visible; 
          background:white;
          border: 1px solid #1DA1F2;
          margin-right: 8px;
      }
  
      .headline:hover {
          background: rgba(0, 114, 198, 0.1);
          border: 1px solid rgba(0, 114, 198, 0.1);
      }
  
      .container {
          display: flex;
          margin-left: 66px;
          margin-top: 20px;
      `;
      document.head.appendChild(style);
  }

  export {htmlToText, textToHtml, addStyle }