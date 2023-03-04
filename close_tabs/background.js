chrome.tabs.query({}, function (tabs) {
    for (var i = 1; i < tabs.length; i++) {
        chrome.tabs.remove(tabs[i].id);
    }
});