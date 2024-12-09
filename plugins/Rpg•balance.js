const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  conn.reply(m.chat, `✿ *》》Economia ${name}《《* ✿

⛀ Cartera » *${coin} ${moneda}*
⚿ Banco » *${coin} ${moneda}*

> _Para proteger tu dinero, ¡depósitalo en el banco usando #deposit!_`, m)
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'balance'];
export default handler;