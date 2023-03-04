console.log('version 2');
var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       var out = this.responseText;
       console.log(out);
       keyword = out;
       var obj = JSON.parse(out);
       console.log(obj[0]['name']);
       var domain = obj[0]['domain'];
       for (x of domain) {
       	console.log(x);
       	// break;
       }
      }
    };
    xhttp.open("GET", "http://cmsver01.webmienphi.org.vn/keyword/all-keyword2.php", true);
    xhttp.send();