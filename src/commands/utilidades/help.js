module.exports = {
  run: async(client, message, args) => {  
    const languages = require('../../languages/languages')
      const { MessageEmbed } = require('discord.js')
      const { guild } = message;

      if(message.author.bot) return;
        const embed = new MessageEmbed()

          .setTitle(`${languages(guild, 'H_C')}`)
          .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
          .setThumbnail(guild.iconURL({ dynamic: true }))
          .addFields(
            {
              name: `${languages(guild, 'H_C3')}`, value: '-aliases (ou, -als)'
            },

            {
              name: 'Utilidades / Utilities:', 
              value: '-convite\n-help\n-avatar\n-ping\n-botinfo\n-userinfo\n-github\n-clima',
              inline: true
            },

            {
              name: 'Moderação / Moderation:',
              value: '-ban\n-kick\n-mute\n-unban\n-unmute\n-slowmode\n-smremove\n-locks\n-unlock',
              inline: true
            },

            {
              name: 'Brincadeiras / Fun:',
              value: '-dado\n-meme\n-rps\n-kiss\n-hug\n-pat\n-slap',
              inline: true
            },

            {
              name: 'Outros / Others',
              value: '-setlanguage\n-vote\n-sponsors',
              inline: true
            },

            {
              name: 'Mensagens de boas-vindas / Welcome Messages:',
              value: '-sgw\n-rgw',
              inline: true
            }

            )
            .addField(`${languages(guild, 'H_C5')}`, `[${languages(guild, 'H_C6')}](https://github.com/The-Crow-pleb/Junk/blob/master/Atalhos/Apple%20Pie/help%20-%20apple/README.md)`)
            .setColor('RANDOM')
            .setFooter(`${languages(guild, 'H_C2')} 6.0`)
        message.channel.send(embed); 
            
  },
  aliases: ['ajuda', 'h'],
  description: 'Comando de ajuda, mostra todos os comandos presentes no servidor!'
}
