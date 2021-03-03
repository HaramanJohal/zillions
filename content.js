document.addEventListener("mouseup", function explainer() {
  let text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
    dom = window.getSelection().anchorNode.parentNode.textContent;
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  if (text === "") return;
  chrome.storage.local.set(
    { zillionsText: text, zillionsDOM: dom },
    function () {
      console.log("zillionsText is set to " + text);
      console.log("zillionsDOM is set to " + dom);
    }
  );
});
