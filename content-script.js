(function () {
/*
 *  DOM selector
 *  @param selector {String} css selector for element
 *  @param context {Element} root element
 *  usage: $$('body')
 *  result: You will get <body> element
 */
function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  return elements.length == 1
    ? Array.prototype.slice.call(elements)[0]
    : Array.prototype.slice.call(elements);
}

  /**
   *
   * copy text to clipboard
   * https://stackoverflow.com/questions/3436102/copy-to-clipboard-in-chrome-extension/12693636#12693636
   *
   * @param str
   * @param mimeType  'Text'
   */
  function copy(str) {
    navigator.clipboard.writeText(str);
  }

    const buttons = Array.isArray($$(".hljs-button")) ? $$(".hljs-button") : [$$(".hljs-button")]
  
    buttons.forEach((btn) => {
      // change title
      btn.dataset.title = "复制";
  
      // remove click
      btn.setAttribute('onclick','')
      
      elClone = btn.cloneNode(true);
  
      btn.parentNode.replaceChild(elClone, btn);
      
      elClone.addEventListener("click", (e) => {
        // copy code
        const parentPreBlock =  e.target.closest("pre")
        const codeBlock = $$('code',parentPreBlock)
        copy(codeBlock.innerText);
  
        e.target.dataset.title = "复制成功";
        setTimeout(() => {
          e.target.dataset.title = "复制";
        }, 1000);
        e.stopPropagation();
        e.preventDefault();
      });
      
  
    });

})();
