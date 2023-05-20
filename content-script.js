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

  function addCSS(styles) {
    let styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
  }

  // 内容区开启复制
  content_views = document.querySelector("#content_views")
  content_views.replaceWith(content_views.cloneNode(true));

  // 功能一： 修改复制按钮，支持一键复制
  const buttons = Array.isArray($$(".hljs-button"))
    ? $$(".hljs-button")
    : [$$(".hljs-button")];

  buttons.forEach((btn) => {
    // 更改标题
    btn.dataset.title = "复制";

    // 移除点击事件
    btn.setAttribute("onclick", "");

    // 克隆按钮
    elClone = btn.cloneNode(true);

    // 替回按钮
    btn.parentNode.replaceChild(elClone, btn);

    // 重新添加点击事件
    elClone.addEventListener("click", (e) => {
      // 实现复制
      const parentPreBlock = e.target.closest("pre");
      const codeBlock = $$("code", parentPreBlock);
      copy(codeBlock.innerText);

      e.target.dataset.title = "复制成功";
      setTimeout(() => {
        e.target.dataset.title = "复制";
      }, 1000);
      e.stopPropagation();
      e.preventDefault();
    });
  });

  // 功能二：解除 关注博主即可阅读全文的提示，
  let readMore = document.querySelector('.btn-readmore')
  let style = `
  .hide-article-box{
    z-index: -1 !important;
  }
  `
  
  if(readMore){
      addCSS(style)
  }
  
})();
