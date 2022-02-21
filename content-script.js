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
    return Array.prototype.slice.call(elements);
  }

  /**
   *
   * copy text to clipboard
   * https://stackoverflow.com/questions/3436102/copy-to-clipboard-in-chrome-extension/12693636#12693636
   *
   * @param str
   * @param mimeType  'Text'
   */
  function copy(str, mimeType = "text/plain") {
    document.oncopy = function (event) {
      event.clipboardData.setData(mimeType, str);
      event.preventDefault();
    };
    document.execCommand("copy", false, null);
  }

  $$(".hljs-button").forEach((btn) => {
    // change title
    btn.dataset.title = "复制";

    btn.addEventListener("click", (e) => {
      // copy code
      copy(e.target.closest(".prism").innerText);

      e.target.dataset.title = "复制成功";
      setTimeout(() => {
        e.target.dataset.title = "复制";
      }, 1000);
      e.stopPropagation();
      e.preventDefault();
    });
  });
})();
