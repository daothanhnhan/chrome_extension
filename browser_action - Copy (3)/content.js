(function () {
	'use strict';

	console.log("Hello from the content scripts!");

	chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
	  console.log(response.farewell);
	  var email = document.getElementById("identifierId");
	  if (email) {
	  	email.value = response.farewell;
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
	  		pass[0].value = 'gavitlanlon';
	  		var next2 = document.getElementById("passwordNext");
	  		next2.click();
	  	}, 6000);
	  }
	});
}())
;

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