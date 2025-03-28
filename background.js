chrome.action.onClicked.addListener(function (tab) {
  const pinboardUrl = `https://pinboard.in/add?next=close&url=${encodeURIComponent(tab.url)}&title=${encodeURIComponent(tab.title)}&description=${encodeURIComponent(tab.title)}`;

  chrome.windows.create({
    url: pinboardUrl,
    type: "popup",
    width: 600,
    height: 550,
    focused: true,
  });
});
