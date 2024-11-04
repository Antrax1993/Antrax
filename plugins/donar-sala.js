let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)},* _le tocó donar una sala estás de mala suerte hoy bájate con todo lo que tengas_😾💥
*_𝙑𝙚𝙣𝙤𝙢-𝘽𝙤𝙩 - MD_* 🌟`, null, {
mentions: [a, b]
})}
handler.help = ['donarsala']
handler.tags = ['group']
handler.command = ['donarsala']
handler.group = true
handler.admin = true
export default handler
