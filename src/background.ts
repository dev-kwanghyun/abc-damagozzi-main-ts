chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message, sender, sendResponse);
  chrome.scripting.executeScript({
    target: { tabId: sender.tab?.id ?? 0 },
    files: ["content.js"],
  });
});
