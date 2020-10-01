const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
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

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '땅콩아 뭐해?') {
    message.reply('나 죄수한테 놀림받고 있어 ㅠㅠ');
  }
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '땅콩아 사랑해') {
    message.reply('^^ (뽀각뽀각뽀각뽀각뽀각뽀각뽀각뽀각뽀각뽀각뽀각뽀각뽀각뽀각뽀각)');
  }
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '땅콩아 핡짝') {
    message.reply('으악!! (뽀각X1972)');
  }
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '땅콩아 도와줘') {
    message.reply('ㅎㅇ땅콩?,땅콩아 뭐해?,땅콩아 사랑해,땅콩아 핡짝 같은 명령어들이 있습니다.');
  }
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '땅콩아') {
    message.reply('왜 목뽀각할일 있어?');
  }
});

client.login(token);