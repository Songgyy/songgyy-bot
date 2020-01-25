const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const axios = require('axios');
const config = require('./config.json');
const fs = require('fs');
const io = require('socket.io');

const client = new Discord.Client();
// Commands collection
client.commands = new Discord.Collection();
// Aliases collection
client.aliases = new Discord.Collection();
// Playlists Queue
client.Queue = new Map();
// set the prefix as global
client.prefix = config.prefix;
// set theme color
client.theme = {
  color: 0xB1103C
};

// Get all commands from commands folder and asign to commands collection
fs.readdir(`${__dirname}/commands/`, (err, file) => {
  if (err) return console.log(err);

  let jsfile = file.filter(f => f.split(".").pop() === "js");

  if (jsfile.length < 1) return console.log("No commands");

  jsfile.map(file => {
    let props = require(`./commands/${file}`);
    console.log(`${file} loaded`);
    client.commands.set(props.help.name, props);
    // check for command aliases
    if (props.help.alias)
      props.help.alias.map(a => client.aliases.set(a, props.help.name));
  });
});


client.on('ready', () => {
  console.log(`Bot has started: ${client.users.size} users, in 
      ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  console.log(`Serving ${client.guilds.size} discord servers`);
});


client.on('message', async message => {
  // if the bot sent the message return
  if (message.author.bot) return;

  // if not starts with the prefix, ignore
  if (message.content.indexOf(config.prefix) !== 0) return;

  // get the args
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(' ');

  // get the command itself
  const command = args
    .shift()
    .toLowerCase();

  // Get the command from Collection
  let commandFile = client.commands.get(command);
  let aliasCommand = null;
  // If not found, try getting an alias
  if (!commandFile)
    aliasCommand = client.aliases.get(command);
  // if an alias is set get the main command
  if (aliasCommand)
    commandFile = client.commands.get(aliasCommand);
  // return the run method
  if (commandFile) return commandFile.run(client, message, args);

});

client.login(config.token);
