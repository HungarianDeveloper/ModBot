const Discord = require("discord.js");
const client = new Discord.Client();

var count = 0;
var token = "";
var prefix = '|'

client.on('ready', () => {
  console.log("Logged in as " + client.user.username + "!");
});

client.on('message', msg => {
  user = msg.author;
  username = user.username;
  content = msg.content;
  channel = msg.channel;
  count++;
  if (channel.type != 'text') {
	  console.log(count + ': DM ' + username + ': ' + content);
    servername = username;
  } else {
	channelname = channel.name;
    server = channel.guild;
    servername = server.name;
    console.log(count + ": " + servername + ' #' + channelname + ', ' + username + ': ' + content);
  }
	var c = content.toLowerCase();
  // START THE COMMANDS
	if (c.startsWith(prefix + 'kick')){
		var tobekicked = msg.mentions.members.first();
		if (user.hasPermission("Kick Members")){
			tobekicked.kick('You have been kicked by '+username+' !');
			msg.reply('Kicked ' + tobekicked);	
		} else {
			msg.reply('No Permission');
		}
	} else if (c.startsWith(prefix + 'ban')){
		var tobebanned = msg.mentions.members.first();
		if (user.hasPermission("Ban Members")){
			tobebanned.ban('You have been banned by '+username+' !');
			msg.reply('Banned ' + tobebanned);	
		} else {
			msg.reply('No Permission');
		}
	} else if (c.startsWith(prefix + 'ping')) {
		msg.reply('Pong!');
	}
});

client.login(token);
console.log('logged in');
