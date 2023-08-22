chrome.contextMenus.create({
  id: "Link",
  title: "Link",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "Link") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://${selectedText}`;
    chrome.tabs.create({ url: archiveUrl });
  }
});
