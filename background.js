function setBodyclass() {
  let setting = localStorage.getItem('show_react') === null ? setSave('off') : localStorage.getItem('show_react');
  if ( setting == 'borders' ) {
    document.body.classList.add("react-borders");
    chrome.tabs.executeScript({
      code: 'document.body.classList.add("react-borders"); document.body.classList.remove("react-outlines");'
    });
  } else if ( setting == 'outlines' ) {
    chrome.tabs.executeScript({
      code: 'document.body.classList.add("react-outlines"); document.body.classList.remove("react-borders");'
    });
  } else {
    chrome.tabs.executeScript({
      code: 'document.body.classList.remove("react-outlines"); document.body.classList.remove("react-borders");'
    });
  }
}

// on refresh
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
   if (changeInfo.status == "complete") { // onload
     setBodyclass();
  }
});

// on tab change
chrome.tabs.onActivated.addListener(function(stuff) {
  setBodyclass();
});
