chrome.extension.onConnect.addListener(function (port) {
  console.log('connection', port);

  if (port.name != 'color-pusher') {
    return;
  }

  port.onMessage.addListener(function (message) {
    console.log('got message', message);

    chrome.tabs.executeScript({
      code: 'alert("something");'
    });
  });
});
