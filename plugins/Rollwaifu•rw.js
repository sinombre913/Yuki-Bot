import { promises as fs } from 'fs';
import fetch from 'node-fetch';

// Ruta del archivo rwp.json (remoto en GitHub)
const charactersUrl = 'https://raw.githubusercontent.com/Nimodo83/Cuervo-Team-Supreme/refs/heads/main/lib/rwp.json';

// Función para cargar el archivo rwp.json desde GitHub
async function loadCharacters() {
    try {
        const res = await fetch(charactersUrl);
        const characters = await res.json();
        return characters;
    } catch (error) {
        throw new Error('No se pudo cargar el archivo rwp.json desde GitHub.');
    }
}

// Definición del handler del comando 'rw' o 'rollwaifu'
let handler = async (m, { conn }) => {
let cooldowns = {}
let tiempo = 5 * 60
if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempo * 1000) {
const tiempo2 = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempo * 1000 - Date.now()) / 1000))
conn.reply(m.chat, `Espera ⏱️ *${tiempo2}*.`, m)
return
}
cooldowns[m.sender] = Date.now()
    try {
        const characters = await loadCharacters();
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)];

        // Mensaje de información del personaje
        const message = `
 *Nombre*: ${randomCharacter.name}
🎂 *Edad*: ${randomCharacter.age}
💖 *Estado Sentimental*: ${randomCharacter.relationship}
📚 *Origen*: ${randomCharacter.source}
        `;

        // Enviar el mensaje con la información del personaje y la imagen
        const sentMsg = await conn.sendFile(m.chat, randomCharacter.img, `${randomCharacter.name}.jpg`, message, m);

        // Almacenar el personaje generado con el ID del mensaje enviado por el bot
        if (!global.lastCharacter) global.lastCharacter = {};
        global.lastCharacter[sentMsg.key.id] = randomCharacter; // Guardar usando el ID del mensaje del bot

    } catch (error) {
        await conn.reply(m.chat, `Error al cargar el personaje: ${error.message}`, m);
    }
};

// Configuración del comando
handler.help = ['rw', 'rollwaifu'];
handler.tags = ['anime'];
handler.command = ['rw', 'rollwaifu']; // Comandos "rw" y "rollwaifu"

export default handler;

function toNum(number) {
if (number >= 1000 && number < 1000000) {
return (number / 1000).toFixed(1) + 'k'
} else if (number >= 1000000) {
return (number / 1000000).toFixed(1) + 'M'
} else if (number <= -1000 && number > -1000000) {
return (number / 1000).toFixed(1) + 'k'
} else if (number <= -1000000) {
return (number / 1000000).toFixed(1) + 'M'
} else {
return number.toString()}}

function segundosAHMS(segundos) {
let minutos = Math.floor((segundos % 3600) / 60)
let segundosRestantes = segundos % 60
return `${minutos} minutos y ${segundosRestantes} segundos`
}
