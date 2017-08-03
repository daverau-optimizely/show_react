document.getElementById('borders').onclick = function(e){
  updateBadge(e);
  document.getElementById('outlines').classList.remove('oui-button--highlight');
  this.classList.toggle('oui-button--highlight');
  chrome.tabs.executeScript({
    code: 'document.body.classList.toggle("react-border"); document.body.classList.remove("react-outline");'
  });
}

document.getElementById('outlines').onclick = function(e){
  updateBadge(e);
  document.getElementById('borders').classList.remove('oui-button--highlight');
  this.classList.toggle('oui-button--highlight');
  chrome.tabs.executeScript({
    code: 'document.body.classList.toggle("react-outline"); document.body.classList.remove("react-border");'
  });
}

function updateBadge(e) {
  if ( !e.target.classList.contains('oui-button--highlight') ) {
    chrome.browserAction.setBadgeText({
      text: "✓"
    });
    chrome.browserAction.setBadgeBackgroundColor({
      color: "#ff69b4" // hotpink
    });
  } else {
    chrome.browserAction.setBadgeText({
      text: ""
    });
    chrome.browserAction.setBadgeBackgroundColor({
      color: ""
    });
  }
}
