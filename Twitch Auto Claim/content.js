chrome.runtime.onInstalled.addListener(() => {
	console.log("Twitch 忠誠點數自動領取擴充插件已安裝");
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.type === "log") {
		const logMessage = `[${new Date().toLocaleString()}] ${message.text}\n`;
		console.log("[Twitch Autoclaim]", message.text);
		chrome.storage.local.get({ logs: "" }, (data) => {
			const updatedLogs = data.logs + logMessage;
			chrome.storage.local.set({ logs: updatedLogs }, () => {
				chrome.runtime.sendMessage({ type: "log_response", text: message.text });
			});
		});
	}
});
