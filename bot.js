const Discord = require("discord.js");
const client = new Discord.Client();

var count = 0;
var token = "";

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
    sendmessage(username, servername, channelname, content);
    console.log(count + ": " + servername + ' #' + channelname + ', ' + username + ': ' + content);
  }
});

client.login(token);
console.log('logged in');
