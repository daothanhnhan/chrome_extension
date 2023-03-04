(function () {
	'use strict';

	console.log("Hello from the content scripts!");

	var newURL = "http://www.youtube.com/watch?v=oHg5SJYRHA0";
    // chrome.tabs.create({ url: newURL });

    
    var dem = 0;
    if (dem == 0) {
    	dem = 1;
    	// window.open(newURL,'_blank');
    } else {
    	dem = 0;
    }

    var input = document.getElementsByClassName("gsfi");
    if (input) {
        // console.log(input.length);
        // input[1].value = 'tuan';
    }

    var input2 = document.getElementsByClassName("gLFyf");
    var leng = input2.length;
    if (leng != 0) {
        // console.log(input2.length);
        input2[0].value = 'hải sản tươi sống\\';
        var x = document.getElementById("tsf");
        // var txt = "";
        // var i;
        // for (i = 0; i < x.length; i++) {
        //   txt = txt + x.elements[i].name + "<br>";
        // }
        console.log(x.length);
        if (x.length > 3) {
            setTimeout(function(){ x.elements[3].click(); }, 2000);
        }
        
        if (x.length == 3) {
            var r = document.getElementsByClassName("r");
            var i;
            for (i = 0; i < r.length; i++) {
                var content = r[i];
                console.log(content.getElementsByTagName("a")[0].href);
                content = content.getElementsByTagName("a")[0].href;
                // content = htmlEntities(content);
                if (content) {
                    var n = content.indexOf("sach");
                    if (n == -1) {
                        console.log("no");
                        console.log(content);
                        console.log(n);
                    } else {
                        console.log("Yes");
                        window.open(content,'_blank');
                        // window.open(content,'_blank');
                    }
                }
                
                break;
            }
            
            // console.log(r[0]);
        }
    }
}());

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}