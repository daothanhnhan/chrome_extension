// (function () {
	// 'use strict';

	console.log("Hello from the content scripts!");

	console.log(window.location.href);

	setTimeout(function(){ cuon(); }, 1000);

	chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
	  console.log(response.email);
	  console.log(response.keyword);
	  var email = document.getElementById("identifierId");
	  if (email) {
	  	email.value = response.email;
	  	setTimeout(function(){ 
	  		var next = document.getElementById("identifierNext"); 
	  		if (next) {
	  			next.click();
	  		}
	  	}, 2000);

	  	setTimeout(function(){
	  		// var pass = document.getElementsByClassName("whsOnd");
	  		var pass = getPwdInputs();
	  		// alert(pass.length);
	  		pass[0].value = response.pass;
	  		var next2 = document.getElementById("passwordNext");
	  		next2.click();
	  	}, 4500);
	  }


	  var dem = 0;
	  var link = window.location.href;
	  var url = link.indexOf("www.w3schools.com");
	  var tu_khoa = JSON.parse(response.keyword);
	  var sotu = tu_khoa.length - 1;
	  // console.log(sotu);
	  if (url != -1) {
	  	console.log('ok');
	  	
	  	// var myVar = setInterval(function(){  
	  	// 	console.log(dem);
	  	// 	window.open('https://www.google.com.vn/','_blank');
	  		
		  //     if (dem >= sotu) {
		  //     	clearInterval(myVar);
		  //     }
	  	// 	dem++;
	  	// }, 10000);

	  	for (var i=0;i<=sotu;i++) {
	  		var key_item = tu_khoa[i]['name'];
	  		key_item = key_item.replace(/\s/g, "+");
	  		window.open('https://www.google.com.vn/?q='+key_item,'_blank');
	  	}

	  	setTimeout(function(){ window.open('http://cmsver01.webmienphi.org.vn/gmail_2/canhbao.php','_blank'); }, 9000);
	  }

	  

	  var url = link.indexOf("google.com.vn");
	  if (url != -1) {
	  	var tu_khoa = JSON.parse(response.keyword);
	  	var tu_next = response.next;
	  	var tu = (new URL(location.href)).searchParams.get('q');console.log(tu);
	  	for (var i=0;i<tu_khoa.length;i++) {
			if (tu == tu_khoa[i]['name']) {
				var domain = tu_khoa[i]['domain'];
				break;
			}
		}
		console.log(domain);
	  	// if (tu_next <= sotu) {
	  		// var tu = tu_khoa[tu_next]['name'];
	  		// var domain = tu_khoa[tu_next]['domain'];
	  		var input = document.getElementsByClassName("gLFyf");
	      	var leng = input.length;
		      if (leng != 0) {
		      	// input[0].value = tu;
		        var x = document.getElementById("tsf");

		        // console.log(x.length + " == 3");
		        if (x.length > 3) {
		            setTimeout(function(){ x.elements[3].click(); }, 2000);
		        }

		        if (x.length == 3) {
		            var r = document.getElementsByClassName("ad_cclk");
		            var i;
		            for (i = 0; i < r.length; i++) {
		                var content = r[i];
		                console.log(content.getElementsByTagName("a")[0].href);
		                console.log(content.getElementsByTagName("a")[1].getAttribute("data-preconnect-urls"));
		                var duongdan = content.getElementsByTagName("a")[0].href;
		                content = content.getElementsByTagName("a")[1].getAttribute("data-preconnect-urls");
		                // content = htmlEntities(content);
		                if (content) {
		                	// tim domain.
		                	var chk_tenmien = 0;
		                	for (tenmien of domain) {
		                		var n = content.indexOf(tenmien);
		                		if (n != -1) {
		                			chk_tenmien = 1;
		                			break;
		                		}
		                	}
		                    // sau ket qua tim.
		                    if (chk_tenmien == 0) {
		                        console.log("no");
		                        // console.log(content);
		                        // console.log(n);
		                    } else {
		                        console.log("Yes");
		                        window.open(duongdan,'_blank');
		                        // break;
		                    }
		                }
		            }
		            // console.log(r.length + " total");
		        }
		      }
	  	// }
	  	
	  }

	});

// }());

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

function cuon () {
    // // window.scrollTo(0, document.documentElement.scrollHeight);
    var height = document.documentElement.scrollHeight || document.body.scrollHeight;
    console.log(height + " height");
    document.body.scrollTop = height;
    document.documentElement.scrollTop = height;
}






// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({farewell: "goodbye"});
//   });


// chrome.runtime.onMessage.addListener( function (message, sender, sendResponse) { sendResponse("bar"); } );