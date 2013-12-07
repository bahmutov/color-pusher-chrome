chrome.extension.onConnect.addListener(function (port) {
  alert('connection ' + JSON.stringify(port, null, 2));

  if (port.name != "color-pusher") {
    return;
  }

  port.onDisconnect.addListener(function (port) {
  });

  port.onMessage.addListener(function (message) {
    alert('got message ' + JSON.stringify(message, null, 2));
    console.log('got message', message);

    chrome.tabs.executeScript({
      code: 'alert("something");'
    });
  });
});
