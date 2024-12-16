/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
import axios from 'axios';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import {mediafiredl} from '@bochilteam/scraper';

const handler = async (m, {conn, args, usedPrefix, command}) => {
    if (!args[0]) throw m.reply(`✐ Ingresa un link de mediafire junto al comando.`);
m.react(rwait)
  try {
    const resEX = await mediafiredl(args[0]);
    let text = `✐ Mediafire Downloader\n`
    text += `🜸  ≡ Nombre: ${resEX.filename}\n`
    text += `🜸  ≡ Peso: ${resEX.filesizeH}\n`
    text += `🜸  ≡ Tipo: ${resEX.ext}\n`
    text += `🜸 ${botname}\n`
    text += `_Enviando archivo . . . ._`

    await conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: enlace,
                        mediaType: 2,
                        description: `.`,
                        title: botname,
                        body: dev,          previewType: 0,
                        thumbnail: await (await fetch(`${catalogo}`)).buffer(),
                        mediaUrl: enlace
                        
                      }}
})
    await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, {mimetype: resEX.ext, asDocument: true});
  } catch {
    try {
      const res = await mediafireDl(args[0]);
      const {name, size, date, mime, link} = res;
      let text2 = `✐ Mediafire Downloader\n`
    text2 += `🜸  ≡ Nombre: ${resEX.filename}\n`
    text2 += `🜸  ≡ Peso: ${resEX.filesizeH}\n`
    text2 += `🜸  ≡ Tipo: ${resEX.ext}\n`
    text2 += `🜸 ${botname}\n`
    text2 += `_Enviando archivo . . . ._`
      await conn.reply(m.chat, text2, m, {
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: enlace,
                        mediaType: 2,
                        description: `.`,
                        title: botname,
                        body: dev,          previewType: 0,
                        thumbnail: await (await fetch(`${catalogo}`)).buffer(),
                        mediaUrl: enlace
                        
                      }}
})
      await conn.sendFile(m.chat, link, name, '', m, null, {mimetype: mime, asDocument: true});
    } catch {
      await m.reply(`✐ Ingresa un link de mediafire junto al comando.`);
    }
  }
};
handler.help = ['mediafire'].map((v) => v + ' <url>');
handler.tags = ['dl'];
handler.command = ['mediafire','mediafiredl','dmediafire']
export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return {name, size, date, mime, link};
      }
