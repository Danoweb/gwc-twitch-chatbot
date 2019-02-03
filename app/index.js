"use strict";
const config = require('./config.js');

const TwitchClient = require('./twitch/twitchHandler.js');

async function run() {
    //Setup Twitch Chat Config
    let twitchOptions = {
        identity: {
            username: config.twitch.username,
            password: config.twitch.password
        },
        channels: config.twitch.channels,
        congratsEmote: config.twitch.congratsEmote
    };

    //Connect to Twitch Chat
    const chatClient = TwitchClient(twitchOptions, config.twitch.prefix);
    await chatClient.connect();
}

//Start the Main Loop
run();