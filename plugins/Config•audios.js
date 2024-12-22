
let handler = m => m
handler.all = async function (m) {
  for (const message in audioMsg) {
    if (new RegExp(`^${message}$`, 'i').test(m.text)) {
      this.sendFile(m.chat, audioMsg[message], 'audio.mp3', null, m, true)
      break
    }
  }
  return !0
 }

export default handler


let audioMsg = {
  'fino señores': './src/fino.mp3',
  'buenos días': 'https://k.top4top.io/m_2826iqdri1.mp3',
  'buenas tardes': 'https://b.top4top.io/m_2826v2zg51.mp3',
  'buenas noches': 'https://i.top4top.io/m_2826o8rfj1.mp3',
  'sad': 'https://h.top4top.io/m_2826mcim21.mp3',
  '@5213318360934|@5213339577315': './src/etiqueta.mp3', 
  'uwu|UwU|Uwu': './src/uwu.mp3',
  'oni|Onichan|Oni-chan|onichan|oni-chan': './src/oni.mp3',
  'raw|rawr|rarw': './src/rawr.mp3',
  'bot puto|puto bot| bot malparido|mierda de bot|bot de mierda': './src/bot_puto.mp3'
}
