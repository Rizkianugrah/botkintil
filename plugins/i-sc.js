let handler  = async (m, { conn, args }) => {
   m.reply(`Bot Ini Jangan Lupa Donasi : https://saweria.co/owneryusuf`)
}
 
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
