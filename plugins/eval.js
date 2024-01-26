const {
    Sparky
} = require("../index.js");
const X = require("../config.js");

Sparky(
    {
        on: "text",
        desc: "Runs server code",
        type: "user",
    },
    async ({
        sparky, msg
    }) => {
        let sudo = X.SUDO.split(",");
        if (msg.sender.includes(sudo) || msg.key.fromMe) {

            if (msg.text.startsWith('>')) {
                var evaluate = true;
                try {
                    evaluate = await eval(msg.text.replace('>', '').toString());
                    try {
                        evaluate = JSON.stringify(evaluate, null, 2);
                    } catch {}
                } catch (e) {
                    evaluate = e.stack.toString();
                }
                await sparky.sendMessage(msg.chat, {
                    text: evaluate
                }, {
                    quoted: msg
                });
            }
        }

    }
);