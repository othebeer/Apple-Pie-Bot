const { MessageEmbed } = require("discord.js")
const pageEmbed = require('discord.js-pagination')
const languages = require("../../util/languages/languages")

module.exports = {
    aliases: [],
    description: 'Meu site',
    run: async(client, message) => {

        const landingPage = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
            .setDescription(`Thank you for visiting me ${process.env.CUTIE}`, process.env.CUTIE)
            .setColor("RANDOM")
            .addFields(
                {
                    name: `This is my site:`,
                    value: `[Click Here](https://www.applepiebot.xyz/)`
                }
            )
        const commmandsPage = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
            .setDescription(`Thank you for visiting me `, process.env.CUTIE)
            .setColor("RANDOM")
            .addFields(
                {
                    name: `These are my commands, take a look on them!:`,
                    value: `[Click Here](https://www.applepiebot.xyz/commands)`
                }
            )
        const invitePage = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
            .setDescription(`Thank you for visiting me ${process.env.CUTIE}`)
            .setColor("RANDOM")
            .addFields(
                {
                    name: `Here you can find where to invite me:`,
                    value: `[Click Here](https://www.applepiebot.xyz/invite-me)`
                }
            )
        const donatePage = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
            .setDescription(`Thank you for visiting me`, process.env.CUTIE)
            .setColor("RANDOM")
            .addFields(
                {
                    name: `Thank you for considering!`,
                    value: `[Click Here](https://www.applepiebot.xyz/donate)`
                }
            )
        pages = [
            landingPage,
            commmandsPage,
            invitePage,
            donatePage
        ]
        pageEmbed(message, pages)
    }
}