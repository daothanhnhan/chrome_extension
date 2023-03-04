console.log("Xin chào Tuấn");

var email = 'tuan@gmail.com';
var pass = '';
var keyword = '';

var stt = 0;
get_stt();
setTimeout(function(){
  get_stt();
}, 500);




// setTimeout(function(){ 
//     window.open('https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin','_blank');
// }, 1000);



// lấy record đầu tiên
// var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//        var out = this.responseText;
//        console.log(out);
//        var obj = JSON.parse(out);
//        email = obj.email;
//        pass = obj.pass;
//        // dem++;
//        // if (dem == total) {
//         // dem = 0;
//        // }
//        // console.log("dem:"+dem);
//        // console.log("total:"+total);
//       }
//     };
//     xhttp.open("GET", "http://cmsver01.webmienphi.org.vn/gmail_1/gmail_next.php?num=0", true);
//     xhttp.send();

var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       var out = this.responseText;
       console.log(out);
       keyword = out;
       // var obj = JSON.parse(out);
       // console.log(obj[0]['name']);
      }
    };
    xhttp.open("GET", "http://cmsver01.webmienphi.org.vn/keyword_1/all-keyword2.php", true);
    xhttp.send();

var total = 0;
var dem = 0;
var next = -1;

// set tổng và biến đếm
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var total = this.responseText;
     total = Number(total);
     // total--;
     console.log("total:"+total);
     console.log("dem:"+dem);
     totalf(total);
    }
  };
  xhttp.open("GET", "http://cmsver01.webmienphi.org.vn/gmail_1/total.php", true);
  xhttp.send();

// setTimeout(function(){ console.log("total-:"+total); }, 100);

// lấy record tăng dần sau mỗi lần mở trang
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    console.log("stt:"+stt);
    console.log("email:"+email);

    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //    var out = this.responseText;
    //    console.log(out);
    //    var obj = JSON.parse(out);
    //    email = obj.email;
    //    pass = obj.pass;
    //    dem++;
    //    if (dem == total) {
    //     dem = 0;
    //    }
    //    console.log("dem:"+dem);
    //    console.log("total:"+total);
    //   }
    // };
    // xhttp.open("GET", "http://cmsver01.webmienphi.org.vn/gmail_1/gmail_next.php?num="+dem, true);
    // xhttp.send();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       var out = this.responseText;
       console.log(out);
       keyword = out;
       // var obj = JSON.parse(out);
       // console.log(obj[0]['name']);
      }
    };
    xhttp.open("GET", "http://cmsver01.webmienphi.org.vn/keyword_1/all-keyword2.php", true);
    xhttp.send();


    var link = sender.tab.url;
    url = link.indexOf("mail.google.com");
    if (url != -1) {
      next = -1;
      stt++;
      if (stt >= total) {
        stt = 0;
      }
      set_stt(stt);
    }
    if (link == 'https://www.google.com.vn/') {
      next++;
      console.log(next);
    }

    if (request.greeting == "hello")
      sendResponse({email: email, pass: pass, keyword: keyword, next: next});
  });

function totalf (s) {
  total = s;
}

function get_stt () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var out = this.responseText;
     stt = out;
     get_gmail(stt);
     // get_stt_extra(out);
     // console.log("stt1:"+out);
    }
  };
  xhttp.open("GET", "http://cmsver01.webmienphi.org.vn/gmail_1/get_stt.php", true);
  xhttp.send();
}

function get_stt_extra (out) {
  stt = out;
}

function get_gmail (sott) {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       var out = this.responseText;
       console.log(out);
       var obj = JSON.parse(out);
       email = obj.email;
       pass = obj.pass;
       // dem++;
       // if (dem == total) {
        // dem = 0;
       // }
       // console.log("dem:"+dem);
       // console.log("total:"+total);
      }
    };
    xhttp.open("GET", "http://cmsver01.webmienphi.org.vn/gmail_1/gmail_next.php?num="+sott, true);
    xhttp.send();
}

function set_stt (sott) {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       // var out = this.responseText;
       
      }
    };
    xhttp.open("GET", "http://cmsver01.webmienphi.org.vn/gmail_1/set_stt.php?stt="+sott, true);
    xhttp.send();
}





// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  // chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    // console.log(response.farewell);
  // });
// });