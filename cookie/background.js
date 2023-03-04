function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeCookies({}).
then(onRemoved, onError);