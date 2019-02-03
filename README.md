# gwc-twitch-chatbot
Twitch Chatbot project for the Gamers Who Code Meetup Group

# Prerequisites
* Please have either:
    * `Docker` (Beginner)
    * or 
    * `node` and `npm` (Advanced)

# Setup:
Update the settings in the `config.json` file.

# Use:
* Complete the **Setup** section first.
* From the command line within the project folder type:
* `docker-compose build`
* `docker-compose up`
* To quit press `CTRL+C` in the command window

## Twitch:
* Add a username (your account or Bot account) inside the username: `""`
* Add an oauth key inside the password: `""` 
    * (OAUTH VALUE) -> Visit: https://twitchapps.com/tmi
    * Note: This will give you a key for the account you are logged in with
* Add a channel inside the channels: `['']`
* _(Optional)_: Set the `Emote` icon to use when congratulating a user

# Commands:
* This section assumes the command prefix in the config is set to the default: `!`

* `!join` - join the list
* `!stats` - show a count of those who joined the list

# Disclaimer:
Disclaimer of Liability. NEITHER PARTY SHALL BE LIABLE TO THE OTHER FOR ANY (A) SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF PROFITS, ARISING FROM OR RELATED TO A BREACH OF THIS AGREEMENT OR THE OPERATION OR USE OF SYSTEMS, THE EQUIPMENT OR DANIEL REED INCLUDING SUCH DAMAGES, WITHOUT LIMITATION, ARISING FROM LOSS OF DATA OR PROGRAMMING, LOSS OF REVENUE OR PROFITS, FAILURE TO REALIZE SAVINGS OR OTHER BENEFITS, DAMAGE TO EQUIPMENT, AND THIRD PARTY CLAIMS AGAINST ONE PARTY, EVEN IF THE OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; OR (B) DAMAGES (REGARDLESS OF THEIR NATURE) FOR ANY DELAY OR FAILURE BY DANIEL REED TO PERFORM ITS OBLIGATIONS UNDER THIS AGREEMENT DUE TO ANY CAUSE BEYOND DANIEL REEDS REASONABLE CONTROL 