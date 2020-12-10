exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'ORANGE',
            author: { name: 'Bot Orders' },
            footer:{ text: 'NIRO DEVELOPMENT' },
            fields: [
                { name: 'Music Orders', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`' },
            ],
            timestamp: new Date(),
            description: `**You Can Make Project Like this 🤩 From [HERE](https://repl.it/@NIR0/JSMusic-bot-by-niro#commands/help.js)**`,
        },
    });

};
