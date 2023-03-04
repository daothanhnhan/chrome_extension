function youtube () {
	// var yes = document.getElementById("text");
	var yes = document.getElementById("confirm-button");
	if (yes) {
		yes.click();
		console.log('yes');
	} else {
		console.log('no');
	}

}

setInterval(function(){ youtube(); }, 30000);
console.log('ok');