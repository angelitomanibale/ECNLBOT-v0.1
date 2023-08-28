console.log(chrome.webNavigation)
chrome.webNavigation.onDOMContentLoaded.addListener(
    function () {
        setInterval(() => {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                // Send a message to the content script in the active tab
                chrome.tabs.sendMessage(tabs[0].id, { message: "myMessage" });
              }); 
        }, 5000);
      
    },
    { url: [{ schemes: ["http", "https"] }] }
  );