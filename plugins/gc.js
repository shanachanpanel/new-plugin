let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `*Join Ke Grup Official KagumiBotz✨*`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: '💌 › Group KagumiBotz', description: "Group Utama KagumiBotz", rowId:".gcbot1"},
        {title: '✉️ › Gruop KagumiBotz#2', description: "Group Kedua", rowId:".gcbot2"},
        {title: '✉️ › Group KagumiBotz#3', description: "Gruop Ketiga", rowId:".gcbot3"},
        {title: '🎐 › Owner', description: "Creator Kagumi >ω<", rowId:".nowner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(gcbot|grupbot|botgrup)$/i
handler.help = ['gcbot', 'grupbot', 'botgrup']
module.exports = handler
