let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    pepe = 'https://telegra.ph/file/0dfb35a7c7d0ada2e75d1.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "nisacanz-bot",
        "description": `
*nisacanz-bot*
        
1 Grup / 30 Hari
Rp. 15,000 Ovo
Rp. 20,000 Pulsa Telkomsel

1 Premium / 30 Hari
Rp. 5,000  Ovo
Rp. 10,000 Pulsa Telkomsel

tertarik? hubungi:
@6281387089252 (yusup)
@623199789390 (bot)
`.trim(),
        
"businessOwnerJid": "12096710019@s.whatsapp.net"
        },
        "footerText": "wa.me/6281387089252\nwa.me/6283199789390"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot']
handler.tags = ['main']
handler.command = /^sewa(bot|melcanz)$/i

module.exports = handler
