console.log("Trương Quang Tuấn");
var link = window.location.href;

var url1 = link.indexOf("ads.google.com");
if (url1 != -1) {
	// var iframe = document.getElementsByTagName("iframe");
	setTimeout(function(){ furl(); }, 10000);
}



chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
	console.log(response.keyword);
	var url = link.indexOf("w3schools.com");
	var obj = JSON.parse(response.keyword);
	if (url != -1) {
		// console.log(obj.length);
		for (var i=0;i<obj.length;i++) {
			console.log(obj[i]['name']);
			// setTimeout(function(){
				var name = obj[i]['name'];
				name = name.replace(/\s/g, "+");
				var link_run = 'https://ads.google.com/aw/diagnostic/AdPreview?ocid=325927414&__c=9241644486&authuser=0&__u=3129573614&lang=en&loc=1028580&device=30000&st=';
				link_run = link_run + name;
				window.open(link_run, '_blank');
				var link_run = 'https://ads.google.com/aw/diagnostic/AdPreview?ocid=325927414&__c=9241644486&authuser=0&__u=3129573614&lang=en&loc=1028580&device=30001&st=';
				link_run = link_run + name;
				window.open(link_run, '_blank');
			// }, 20000);
		}
		
		console.log("run");
	}

	var url2 = link.indexOf("www.google.com");
	if (url2 != -1) {
		
		var q = (new URL(location.href)).searchParams.get('q');console.log(q);
		for (var i=0;i<obj.length;i++) {
			if (q == obj[i]['name']) {
				var domain = obj[i]['domain'];
				break;
			}
		}
		console.log(domain);
		var a = document.getElementsByTagName("a");
		for (var i=0;i<a.length;i++) {
			if (a[i].getAttribute("data-preconnect-urls")) {
				console.log(a[i].getAttribute("data-preconnect-urls"));
				for (var j=0;j<domain.length;j++) {
					var link_chk = a[i].getAttribute("data-preconnect-urls");
					var url_chk = link_chk.indexOf(domain[j]);
					var ok = 0;
					if (url_chk != -1) {
						ok = 1;
						break;
					}
				}
				if (ok == 1) {
					console.log("yes");
					window.open('http://cmsver01.webmienphi.org.vn/keyword_2/bell.mp3', '_blank');
				} else {
					console.log("no");
				}
			}
		}
		var clas = document.getElementsByClassName("ads-fr");
		for (var i=0;i<clas.length;i++) {
			var a_m = clas[i].getElementsByTagName("a");
			console.log(a_m[0].href);
			for (var j=0;j<domain.length;j++) {
				var link_chk_m = a_m[0].href;
				var url_chk_m = link_chk_m.indexOf(domain[j]);
				var ok = 0;
				if (url_chk_m != -1) {
					ok = 1;
					break;
				}
			}
			if (ok == 1) {
				console.log("yes");
				window.open('http://cmsver01.webmienphi.org.vn/keyword_2/bell.mp3', '_blank');
			} else {
				console.log("no");
			}
		}
	}
});


function furl () {
	var iframe = document.getElementsByClassName("iframe-preview");
	console.log(iframe.length);
	console.log(iframe[0].src);
	window.open(iframe[0].src);
}

