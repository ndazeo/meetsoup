function notify(message) {
    browser.notifications.create({
        "type": "basic",
        "iconUrl": browser.extension.getURL("icons/icon-48.png"),
        "title": message.sender,
        "message": message.message
    });
}

browser.runtime.onMessage.addListener(notify);