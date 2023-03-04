// function onDeleteAll() {
//   console.log("Deleted all history");
// }

// function deleteAllHistory() {
//   var deletingAll = browser.history.deleteAll();
//   deletingAll.then(onDeleteAll);
// }

// deleteAllHistory();

// chrome.history.deleteUrl({
//         url: "https://developer.chrome.com/extensions/history"
//     });

// chrome.history.search({text: '', maxResults: 10}, function(data) {
//     data.forEach(function(page) {
//         console.log(page.url);
//     });
// });

chrome.history.deleteAll(function(){
	
});