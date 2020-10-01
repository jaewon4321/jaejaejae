const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzYxMTE1NzE2NzE5NjA3ODEw.X3V6Pw.AWa0Dqo2h3SJ9cSYKs4gAeLKxHY';
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "안녕? 눈을 깜박이지마!.";
const byeChannelComment = "훗 결국 눈을 깜박였군(뽀각)";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "CLASS-D"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === 'ㅎㅇ땅콩?') {
    message.reply('ㅎㅇ? (목뽀각)');
  }
});

client.login(token);