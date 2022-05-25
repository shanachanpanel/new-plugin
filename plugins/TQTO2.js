//di ilangin jangan,di tambahin boleh
let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Ya','Mungkin iya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'])}
`.trim(), m)
}
handler.help = ['𝙺𝙰𝙼𝙰𝙺𝙾','Zɪᴠғᴜʀʀ','Hᴀᴏʀɪʙᴏᴛᴢ ʙʏ ᴢɪᴠғᴜʀʀ','Kᴀɴɴᴀʙᴏᴛ ʙʏ ʟᴇᴛᴛᴀ sᴀᴍᴀ','Oɴᴇ ʙᴏᴛ ʙʏ ᴅᴀᴠɪᴅ','Yᴀɴᴢʙᴏᴛ ʙʏ ʏᴀɴɴᴢ','Kᴏᴄʜᴇɴɢ ʙᴏᴛ ʙʏ ᴅᴏᴅᴏʟ','Aʟʏᴀʙᴏᴛ ʙʏ ᴀʟʏᴀxʏᴢ','Sᴇʟᴜʀᴜʜ ᴄʀᴇᴀᴛᴏʀʙᴏᴛ']
handler.tags = ['thnks']
handler.customPrefix = /(\?$)/
handler.command = /^rakujelek$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
//jgn di ilagin cok
