(function () {
	'use strict';

	console.log("Hello from the content scripts!");

	var newURL = "http://www.youtube.com/watch?v=oHg5SJYRHA0";
    // chrome.tabs.create({ url: newURL });

    setTimeout(function(){ cuon(); }, 1000);

    
    
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
        // input2[0].value = 'thiết kế web';
        // input2[0].value = 'trang sức vàng';
        input2[0].value = 'chuyển nhà giá rẻ';
        // input2[0].value = 'vận chuyển nhanh';
        var x = document.getElementById("tsf");
        // var txt = "";
        // var i;
        // for (i = 0; i < x.length; i++) {
        //   txt = txt + x.elements[i].name + "<br>";
        // }
        console.log(x.length + " == 3");
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
                var link = content.getElementsByTagName("a")[0].href;
                content = content.getElementsByTagName("a")[1].href;
                // content = htmlEntities(content);
                if (content) {
                    var n = content.indexOf(".");
                    if (n == -1) {
                        console.log("no");
                        // console.log(content);
                        // console.log(n);
                    } else {
                        console.log("Yes");
                        window.open(link,'_blank');
                        // window.open(content,'_blank');
                        // break;
                    }
                    
                }
                
                
            }
            
            console.log(r.length + " total");
        }
    }
}());

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function cuon () {
    // // window.scrollTo(0, document.documentElement.scrollHeight);
    var height = document.documentElement.scrollHeight || document.body.scrollHeight;
    console.log(height + " height");
    document.body.scrollTop = height;
    document.documentElement.scrollTop = height;
}