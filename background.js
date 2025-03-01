chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
  if (message.action === "checkTab") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let isYoutube = tabs[0] && tabs[0].url.includes("youtube.com");
      sendResponse({ isYoutube: isYoutube });
    });
  }
  return true;
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startSearch") {
    const topic = message.topic;
    searchUrl = `https://www.youtube.com/results?search_query=${topic}`;
    chrome.tabs.create({ url: searchUrl }, (tab) => {
      setTimeout(() => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content.js"],
        });
      }, 3000);
    });
  }
});
