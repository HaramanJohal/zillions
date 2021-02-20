chrome.storage.local.get(['zillionsText'], function(result) {
  document.getElementById("text").innerHTML = result.zillionsText
});