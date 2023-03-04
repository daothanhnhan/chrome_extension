console.log("Xin chào Tuấn");

chrome.runtime.onConnect.addListener(function (messagePort) {
	messagePort.onMessage.addListener(function (message) {
		console.log(message.h2);
	})
});