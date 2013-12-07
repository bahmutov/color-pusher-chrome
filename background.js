chrome.runtime.onConnect.addListener(function(port) {
  if (port.name != "color-pusher") {
    return;
  }

  port.onDisconnect.addListener(function(port) {
  });

  port.onMessage.addListener(function (message) {
    chrome.tabs.getCurrent(function (tab) {
      if (!tab) {
        return;
      }

      chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
      });
    });
  });
});
