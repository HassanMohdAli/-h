# Music-bot by niro

All Copyright Go's To @ニロ#٣٨٩٢ 

### ⚡ Installation

go to `config` folder and edit bot.json file

```js
{
    "game": "GAME",//your bot status
    "prefix": "PREFIX",//your boy prerix 
    "token_bot": "TOKEN"//your bot token
}
```

Reminder :

- `game`, the status of the bot.
- `prefix`, the prefix that will be set to use the bot.
- `token_bot`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.

To customize the emojis go to the file `emojis.json`.
Emojis are already defined by default but you can modify them if you wish.

```js
{
    "music": ":musical_note:",
    "queue": ":bar_chart:",
    "error": ":x:",
    "success": ":white_check_mark:"
}
```

In the console, type `npm install` to install all dependencies.

To start the bot :

```
#With Node
node index.js

#With pm2
pm2 start index.js --name "MusicBot"
```

### 🎵 Music commands

```
play <name>, play music in a voice channel.
pause, pause the current music.
resume, puts the current music back on. 
queue, see the next musics.
clear-queue, delete the next music.
shuffle, to mix the queue.
np, see music in progress.
loop, to enable or disable the repeat function.
volume <1 - 100>, change the volume.
skip, skip to next music.
stop, stop all music.

```

### 🛠️ Support

You Can Find Me In [Mifed Codes](https://discord.gg/U2aSYFksYN)

You Can Call Me In Discord : @ニロ#٣٨٩٢ 
