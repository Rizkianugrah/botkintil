let handler  = async (m, { conn, args }) => {
   m.reply(`Bot Ini Jangan Lupa Donasi : saweria.co/owneryusuf`)
}
 
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
