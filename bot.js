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
  // START THE COMMANDS
	if (content.toLowerCase().startsWith(prefix + 'kick')){
		var tobekicked = msg.mentions.members.first();
		if (user.hasPermission("Kick Members")){
			tobekicked.kick('You have been kicked by '+username+' !')	
		}
	};
	if (content.toLowerCase().startsWith(prefix + 'ban')){
		var tobebanned = msg.mentions.members.first();
		if (user.hasPermission("Ban Members")){
			tobekicked.ban('You have been banned by '+username+' !')	
		}
	};
});

client.login(token);
console.log('logged in');
