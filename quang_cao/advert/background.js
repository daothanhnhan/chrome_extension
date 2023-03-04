var keyword = '';

var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       var out = this.responseText;
       console.log(out);
       keyword = out;
       // var obj = JSON.parse(out);
       // console.log(obj[0]['name']);
      }
    };
    xhttp.open("GET", "http://cmsver01.webmienphi.org.vn/keyword_2/all-keyword2.php", true);
    xhttp.send();

setTimeout(function(){ window.open("https://www.w3schools.com/", "_blank"); }, 2000);

setInterval(function(){ 
  console.log('reset');
    chrome.tabs.query({}, function (tabs) {
      for (var i = 1; i < tabs.length; i++) {
          chrome.tabs.remove(tabs[i].id);
      }
    });

    window.open("https://www.w3schools.com/", "_blank");
 }, 40000);

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
       keyword = out;
       // var obj = JSON.parse(out);
       // console.log(obj[0]['name']);
      }
    };
    xhttp.open("GET", "http://cmsver01.webmienphi.org.vn/keyword_2/all-keyword2.php", true);
    xhttp.send();

    if (request.greeting == "hello")
      sendResponse({keyword: keyword});
});