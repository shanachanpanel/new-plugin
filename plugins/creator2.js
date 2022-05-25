const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "Harva",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Harva\nitem1.TEL;waid=17472773940:0\nitem1.X-ABLabel:📍 Creator KagumiBotz\nitem2.EMAIL;type=INTERNET:zvolkanos@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://instabio.cc/violet\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | Jawa Timur\nitem5.X-ABLabel:──────[ ᴋᴇʟᴠɪɴ ]──────\nEND:VCARD"
}, {
    "displayName": "Zhan",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:My Partner\nitem1.TEL;waid=6288289728766:0\nitem1.X-ABLabel:📍 Creator KamakoBotz\nitem2.EMAIL;type=INTERNET:chikahimatsuki@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://instabio.cc/himatsuki\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | Jawa Barat\nitem5.X-ABLabel:────[ 𝚉𝚑𝚊𝚗 ]────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(nowner)$/i

module.exports = handler
