/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */

const handler = async (m, {conn, isAdmin}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language

  if (m.fromMe) return;
  if (isAdmin) throw tradutor.texto1;
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply(tradutor.texto2);
  }
};
handler.command = /^autoadmin$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
