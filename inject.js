let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (!mutation.addedNodes) return;

        for (let i = 0; i < mutation.addedNodes.length; i++) {
            // do things to your newly added nodes here
            let node = mutation.addedNodes[i];
            if (node.classList.contains("oIy2qc")) {
                const sender = node.parentElement.parentElement.dataset.senderName;
                console.log(sender + ": " + node.dataset.messageText);
                browser.runtime.sendMessage({ "url": target.href });
                browser.notifications.create({
                    "sender": sender,
                    "message": node.dataset.messageText
                });
            }
        }
    })
})

observer.observe(document.body, {
    childList: true
    , subtree: true
    , attributes: false
    , characterData: false
})


