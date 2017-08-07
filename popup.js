updateUI();

// Buttons
document.getElementById('off').onclick = function(e){
  setSave('off');
  updateUI();
}
document.getElementById('borders').onclick = function(e){
  setSave('borders');
  updateUI();
}
document.getElementById('outlines').onclick = function(e){
  setSave('outlines');
  updateUI();
}

function updateUI() {
  let setting = localStorage.getItem('show_react');
  updateButtons(setting);
  updateBadge(setting);
  injectBodyClass(setting);
  // chrome.storage.local.get({setting:'off'}, function(val) {
  //   updateButtons(val.setting);
  //   updateBadge(val.setting);
  //   injectBodyClass(val.setting);
  // });
}
function setSave(val) {
  localStorage.setItem('show_react',val);
  // chrome.storage.local.set({'setting': val}, function() {
  //   updateUI();
  // });
}

// Add/remove target tab body class
function injectBodyClass(borderType) {
  if (typeof chrome.tabs !== 'undefined') {
    if ( borderType === 'borders' ) {
      chrome.tabs.executeScript({
        code: 'document.body.classList.add("react-borders"); document.body.classList.remove("react-outlines");'
      });
    } else if ( borderType === 'outlines' ) {
      chrome.tabs.executeScript({
        code: 'document.body.classList.add("react-outlines"); document.body.classList.remove("react-borders");'
      });
    } else {
      chrome.tabs.executeScript({
        code: 'document.body.classList.remove("react-outlines"); document.body.classList.remove("react-borders");'
      });
    }
  }
}

// Button highlight
function updateButtons(val) {
  document.getElementById('off').classList.remove('oui-button--highlight');
  document.getElementById('outlines').classList.remove('oui-button--highlight');
  document.getElementById('borders').classList.remove('oui-button--highlight');

  document.getElementById( val ).classList.add('oui-button--highlight');
}

// Toggle pink checkmark that works across tabs
function updateBadge(val) {
  if (typeof chrome.browserAction !== 'undefined') { // ihatejavascript
    if ( val !== 'off' ) {
      chrome.browserAction.setBadgeText({
        text: "✓"
      });
      chrome.browserAction.setBadgeBackgroundColor({
        color: "#FF69B4"
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
}
