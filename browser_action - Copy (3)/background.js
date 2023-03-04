console.log("Xin chào Tuấn");

var email = 'truongquangtuan3110@gmail.com';

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "truongquangtuan3110@gmail.com"});
  });