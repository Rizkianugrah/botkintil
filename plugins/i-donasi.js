let handler = async (m) => {
    m.reply(`
┌「 *donasi* 」
├ https://saweria.co/owneryusuf
├ https://trakteer.id/botannisa
├ donasi via
├ Telkom : 081387089252
├ Ovo :083199789390
└────
`.trim())
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
