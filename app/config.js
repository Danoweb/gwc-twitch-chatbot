const config = {
    node_port: 3000,
    twitch: {
        //Twitch username the Bot should use
        username: "",
        //See: https://twitchapps.com/tmi --- For obtaining key with the logged in account (username)
        //NOTE: This account must match the account in the `username` field
        //Password should be the whole string: oauth:#####...
        password: "",
        //Twitch Channel the Bot should connect to i.e. https://www.twitch.tv/___________
        channels: [""],
        prefix: '!',
        //The Emote to Display when Congratulating in Chat (Username account must have access to this emote!)
        congratsEmote: "TwitchLit"
    }
};

module.exports = config;