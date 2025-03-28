chrome.action.onClicked.addListener(function (tab) {
  const closeUrl = chrome.runtime.getURL("close.html");

  const pinboardUrl = `https://pinboard.in/add?next=${encodeURIComponent(closeUrl)}&url=${encodeURIComponent(tab.url)}&title=${encodeURIComponent(tab.title)}&description=${encodeURIComponent(tab.title)}`;

  chrome.windows.create({
    url: pinboardUrl,
    type: "popup",
    width: 600,
    height: 550,
    focused: true,
  });
});
