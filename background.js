function setBodyclass() {
  let val = localStorage.getItem('show_react');
  if ( val == 'borders' ) {
    document.body.classList.add("react-borders");
    chrome.tabs.executeScript({
      code: 'document.body.classList.add("react-borders"); document.body.classList.remove("react-outlines");'
    });
  } else if ( val == 'outlines' ) {
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
