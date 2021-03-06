const { MessageEmbed } = require('discord.js');
const lang = require('../../../util/languages/languages')

module.exports = {
    aliases: ['vezes', 'mp', 'x'],
    description: 'Multiplicação garaio',
    run: async(client, message, args) => {

        const { guild } = message;
        let n1 = args[0]; let n2 = args[1]
        if(isNaN(n1)) return message.reply(`**${n1.toUpperCase()}** ${lang(guild, "nan")}`).then(msg => msg.delete({timeout: 10000}))
        if(isNaN(n2)) return message.reply(`**${n2.toUpperCase()}** ${lang(guild, "nan")}`).then(msg => msg.delete({timeout: 10000}))

        const result = n1 * n2
        const resultMessage = new MessageEmbed()
            .setAuthor(guild.name, guild.iconURL({dynamic: true}))
            .addFields(
                {name: `📥 Input:`, value: `\`\`\`${n1} x ${n2}\`\`\``},
                {name: `📤 Output:`, value: `\`\`\`${result}\`\`\``}
            )
            .setColor("RANDOM")
        message.reply(resultMessage)
    }
}