const Discord = require("discord.js");

module.exports = {

    run: async (client, message, args) => {
        let embed = {
            color: client.theme.color,
            title: 'Command list for Songyy-bot',
            url: 'https://github.com/gabrielpetry/songyy-bot',
            description: 'All available commands',
            footer: {
               text: 'Songyy-Bot'
            },
                fields: []
        };

        // if no args then return all
        if (!args[0]) {
            client.commands.map(command => {
                embed.fields.push({
                    name: `**${client.prefix}${command.help.name}**`,
                    value: `**Description:** ${command.help.description}`
                });
            });
        } else {
            embed.title = "Help for play command";
            let help = client.commands.filter(c => c.help.name === args[0]);
            let { name, description, usage } = help.get(args[0]).help;
            embed.fields.push({
                name: `**${client.prefix}${name}**`,
                value: `${description}\n\t **usage:** ${usage}`
            });
        }

        await message.channel.send({embed: embed});


    },

    help: {
        name: "help",
        alias: ["h"],
        description: "Show help for commands",
        usage: "help [command]"
    }
};
