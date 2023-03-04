(function () {
	'use strict';

	console.log("Hello from the content scripts!");

	

	chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
	  console.log(response.email);
	  var email = document.getElementById("identifierId");
	  if (email) {
	  	email.value = response.email;
	  	setTimeout(function(){ 
	  		var next = document.getElementById("identifierNext"); 
	  		if (next) {
	  			next.click();
	  		}
	  	}, 3000);

	  	setTimeout(function(){
	  		// var pass = document.getElementsByClassName("whsOnd");
	  		var pass = getPwdInputs();
	  		// alert(pass.length);
	  		pass[0].value = response.pass;
	  		var next2 = document.getElementById("passwordNext");
	  		next2.click();
	  	}, 6000);
	  }
	});
}());

function getPwdInputs() {
  var ary = [];
  var inputs = document.getElementsByTagName("input");
  for (var i=0; i<inputs.length; i++) {
    if (inputs[i].type.toLowerCase() === "password") {
      ary.push(inputs[i]);
    }
  }
  return ary;
}






// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({farewell: "goodbye"});
//   });
