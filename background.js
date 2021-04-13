"use strict"

async function notify(message) {
    await browser.notifications.clear("msg");
    browser.notifications.create("msg", {
        "type": "basic",
        "iconUrl": browser.extension.getURL("icons/icon-48.png"),
        "title": message.sender,
        "message": message.message
    });

}

browser.runtime.onMessage.addListener(notify);