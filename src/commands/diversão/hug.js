//Novamente digo, não é a melhor forma de se fazer, mas funciona. Sim, pretendo melhorar o código quando possível
//I'm going to say it again, it's not the best way to do this, but it works. Yes, I am going to do this better anyday
module.exports = {
    run: async(client, message, args) => {
        const {MessageEmbed} = require('discord.js')
        const user = message.mentions.users.first()
        const me = message.mentions.has(client.user)
        const {guild} = message;

        const g1 = 'https://i.pinimg.com/originals/06/dd/8f/06dd8f976b7353d69aec173b44927ef4.gif'
        const g2 = 'https://i.pinimg.com/originals/68/0b/69/680b69563aceba3df48b4483d007bce3.gif'
        const g3 = 'https://i.pinimg.com/originals/ef/b6/e3/efb6e37a8a31e47b1ea969833555b4b6.gif'
        const g4 = 'https://i.pinimg.com/originals/cb/74/fc/cb74fcfbaa1c29a7744b600ffe365f05.gif'
        const g5 = 'https://i.pinimg.com/originals/b4/39/a5/b439a56458d086acb7eac47cc7991616.gif'
        const g6 = 'https://i.pinimg.com/originals/53/b5/d7/53b5d7446c0c8cc4ab66a1982617f41e.gif'
        const gImages = [g1, g2 ,g3 ,g4, g5, g6]
        const random = gImages[Math.floor(Math.random() * gImages.length)]


        if(me){
            const embed = new MessageEmbed()
                .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
                .setDescription('H-hey! E-eu não gosto de abraços!')
                .setImage('https://i.pinimg.com/originals/8e/a6/a7/8ea6a720f2ebf4aee663f92d9395b864.gif')
                .setColor("E7B985")
            message.channel.send(embed)
            message.channel.send(process.env.BLUSHY3)
            message.channel.send('||Eu agradeço de qualquer modo, é bom ser abraçada...||')
        }


        try{
            if(me) return
            if(user) {
                const embed = new MessageEmbed()
                    .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
                    .setTitle('A vida fica mais doce com abraços!')
                    .setDescription(`**${message.author.username}** deu um abraço em **${user.username}**`)
                    .setImage(random)
                    .setColor('RANDOM')
                message.channel.send(embed)
            }else{
                message.channel.send(`Você quer fazer alguém feliz com um abraço? Que fofo! ${process.env.BLUSHY2}\nTente mencionar alguém para abraçar a pessoa!`)
            }
        }catch(error) {
            console.log(error)
        }

    },
    aliases: ['abrç', 'abraçar', 'hg'],
    description: 'Abraça outro usuário!'
}