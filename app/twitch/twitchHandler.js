const tmi = require('tmi.js');

class TwitchHandler {

    constructor(opts, commandPrefix, registeredViewers=[]) {
        this.opts = opts;

        this.commandPrefix = commandPrefix;

        this.registeredViewers = registeredViewers;
    }
    
    async stats (twitchClient, twitchHandle, target, context, params) {
        //Only Usable if sender is Stream Broadcaster or a Mod
        if (context['badges'] != null && (context['badges']['broadcaster'] == '1' || context['mod'] == true)) {
            let msg = `Contestants Enrolled: GivePLZ ${twitchHandle.registeredViewers.length} TakeNRG`;
            
            //console.log(context);
            console.log('-----REGISTERED VIEWERS:-----');
            console.log(twitchHandle.registeredViewers);

            twitchHandle.sendMessage(twitchClient, target, context, msg);

            console.log(`KEYMAN:----- Executed stats command for ${context.username}`);
        } else {
            console.log(`NOTICE: User ${context.username} not permitted to run command STATS`);
        }
    }

    async join (twitchClient, twitchHandle, target, context, params) {
        //Verify They arent already in the array, if they aren't add them!
        if (twitchHandle.registeredViewers.indexOf(target) < 0) {
           
            twitchHandle.registeredViewers.push(context['username']);
        }
    }

    //TODO: Add methods for any future commands here ----

    clearRegisteredViewers() {
        this.registeredViewers = [];
    }

    //Helper Function to send the Correct type of message
    sendMessage(twitchClient, target, context, message) {
        if (context['message-type'] === 'whisper') {
            twitchClient.whisper(target, message);
         } else {
            twitchClient.say(target, message);
         }
    }

    //Called Every time a message is sent:
    onMessageHandler (twitchClient, twitchHandle, target, context, msg, self) {
        /* - OPTIONAL - Blocks the bot from triggerin itself with messages -> commands
        if (self) {
            //console.log('ignoring message from this bot');
            return;
        }
        */

        if (msg.substr(0, twitchHandle.commandPrefix.length) !== twitchHandle.commandPrefix) {
            //Do nothing, Not a message for this bot to handle.
            return;
        }

        //Split the message into individual words:
        const parse = msg.slice(twitchHandle.commandPrefix.length).split(' ');

        //The Command name is the 0th element in the array
        const commandName = parse[0];

        //Command Parameters are the following ' ' delimited values;
        const params = parse.splice(1);

        //If it is a valid command, run it
        switch(commandName) {
            //TODO: Add a Case block for each Command
            case 'stats':
                twitchHandle.stats(twitchClient, twitchHandle, target, context, params);    
            break;
            case 'join':
                twitchHandle.join(twitchClient, twitchHandle, target, context, params);
            break;
            default:
                //Not a command we have instruciton for!
            break;
        }
    }

    // Called every time the bot connects to Twitch chat:
    onConnectedHandler (addr, port) {
        console.log(`*** Connected to ${addr}:${port} ***`);
    }

    // Called every time the bot disconnects from Twitch:
    onDisconnectedHandler (reason) {
        console.log(`*** Disconnected: ${reason} ***`);
        process.exit(1);
    }
}

module.exports = function createTwitchClient(opts={}, commandPrefix) {
    let regViewers = []
    const twitchHandler = new TwitchHandler(opts, commandPrefix, regViewers);
    
    //Initialize Chat Client
    let client = new tmi.client(opts);

    //Setup Handlers for Events
    client.on('message', (target, context, msg, self) => {
        twitchHandler.onMessageHandler(client, twitchHandler, target, context, msg, self);
    });
    client.on('connected', twitchHandler.onConnectedHandler);
    client.on('disconnected', twitchHandler.onDisconnectedHandler);

    return client;
}