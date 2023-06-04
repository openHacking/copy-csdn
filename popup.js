const input = document.querySelector('#autoOpenCode')

chrome.storage.sync.get(['autoOpenCodeCheck']).then((result) => {
    const check = result.autoOpenCodeCheck === undefined ? true : result.autoOpenCodeCheck;
    setAutoCheck(check);
});

function setAutoCheck(check) {
    input.checked = check
}

input.addEventListener('change', autoCheckOnChange)
function autoCheckOnChange(e) {
    const check = e.target.checked
    chrome.storage.sync.set({ autoOpenCodeCheck: check });
};