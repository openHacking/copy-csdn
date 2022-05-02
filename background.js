// background.js

chrome.runtime.onInstalled.addListener(function (object) {
  let externalUrl = "https://lwebapp.com/zh/post/copy-csdn";

  if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({ url: externalUrl });
  }
});
