# WARNING

**SELFBOTS IS PROHIBITED BY THE DISCORD TERMS OF USE**  
**USE THIS WITH YOUR USER ACCOUNT AT YOUR OWN RISK**

## Description

_This is an utility for sending beautiful embeds into Discord channels with user or bot account._

## Instructions

1. Copy your bot token (find instructions [there](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)) or user token (find instructions [there](https://discordhelp.net/discord-token))
2. Paste your token into `.env.example` file
3. Rename `.env.example` to `.env`
4. Generate embed with one of this generators and copy the JSON code:
   - [Discord.club Embed Generator](https://discord.club/embedg/)
   - [Leovoel Embed Visualizer](https://leovoel.github.io/embed-visualizer/)
5. Paste this json into a file in this folder. Example: `embed_example.json`
6. In `bash` or `cmd` with installed latest [Node.js](https://nodejs.org/en/), enter the folder with this utility: `cd /path/to/util`
7. Install dependencies with `npm install`
8. Type command `node .` with arguments.
   - `-c` argument is the channel ID to which you want to send the message. Example: `-c 638061312655491093`
   - `-f` argument is the name of JSON file with embed data. Example: `-f embed_example.json`
9. Message with embed is now sent. You're beautiful!
