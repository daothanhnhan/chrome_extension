console.log("Xin chào Tuấn");

var email = 'truongquangtuan3110@gmail.com';
var pass = 'gavitlanlon';

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var out = this.responseText;
     console.log(out);
     var obj = JSON.parse(out);
     email = obj.email;
     pass = obj.pass;
    }
  };
  xhttp.open("GET", "http://cmsver01.webmienphi.org.vn/gmail/gmail.php", true);
  xhttp.send();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       var out = this.responseText;
       console.log(out);
       var obj = JSON.parse(out);
       email = obj.email;
       pass = obj.pass;
      }
    };
    xhttp.open("GET", "http://cmsver01.webmienphi.org.vn/gmail/gmail.php", true);
    xhttp.send();

    if (request.greeting == "hello")
      sendResponse({email: email, pass: pass});
  });






// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//     // console.log(response.farewell);
//   });
// });