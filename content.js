document.addEventListener("mouseup", function explainer() {
  let text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  if (text === "") return;
  chrome.storage.local.set({"zillionsText": text}, function() {
    console.log('zillionsText is set to ' + text);
  });
});
