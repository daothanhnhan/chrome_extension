
chrome.cookies.getAll({domain: ".google.com"}, function(cookies) {
	console.log('in:'+cookies.length);
    for(var i=0; i<cookies.length;i++) {
    	console.log(cookies[i].name);
        chrome.cookies.remove({url: "https://" + cookies[i].domain + cookies[i].path, name: cookies[i].name});
    }
});