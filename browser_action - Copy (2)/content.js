(function () {
	'use strict';

	console.log("Hello from the content scripts!");

	var gb_70 = document.getElementById("gb_70")

	if (gb_70) {
		gb_70.addEventListener("mouseover", mouseOver);
	}

	function mouseOver() {
	  // alert('tuan');
	  var messagePort = chrome.runtime.connect({ name : 'headings' });

	  messagePort.postMessage({ h2: 'tuan'});
	}
}())
;