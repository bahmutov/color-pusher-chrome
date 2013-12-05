chrome.devtools.panels.create("color-pusher",
  "icons/panel-icon.png",
  "panel/index.html",
  function(panel) {
    var backgroundPageConnection = chrome.runtime.connect({
      name: "devtools-page"
    });
  });
