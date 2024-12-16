/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/

import fs from 'fs';

const DATA_FILE = './data.json';
const CHARACTERS_FILE = './lib/characters.json';
const BOT_NAME = 'Yue-Bot';
const REPOSITORY_URL = 'git+https://github.com/Nimodo83/Yue-Bot.git';

// Función para obtener datos de almacenamiento local
const obtenerDatos = () => {
    if (fs.existsSync(DATA_FILE)) {
        return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    } else {
        return { chats: {} };
    }
};

// Función para guardar datos en almacenamiento local
const guardarDatos = (datos) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(datos, null, 2));
};

// Función para obtener personajes desde el archivo correspondiente
const obtenerPersonajes = () => {
    if (fs.existsSync(CHARACTERS_FILE)) {
        return JSON.parse(fs.readFileSync(CHARACTERS_FILE, 'utf-8'));
    } else {
        throw new Error('No se encontró el archivo de personajes.');
    }
};

// Función para verificar la configuración del bot
const verificarConfiguracion = () => {
    try {
        const packageData = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
        return (
            packageData.name === BOT_NAME &&
            packageData.repository.url === REPOSITORY_URL
        );
    } catch (error) {
        return false;
    }
};

// Handler principal del comando
const handler = async (message, { conn, args }) => {
    if (args.length < 2) {
        conn.reply(message.chat, 'Debes mencionar a un usuario y el nombre del personaje.\nEjemplo: `!darrw @usuario Megumin`', message);
        return;
    }

    if (!verificarConfiguracion()) {
        await conn.reply(
            message.chat,
            `Este comando solo está disponible para ${BOT_NAME}.\n🔥 ${REPOSITORY_URL}`,
            message
        );
        return;
    }

    const mentionedUser = message.mentionedJid[0];
    if (!mentionedUser) {
        conn.reply(message.chat, 'Debes mencionar a un usuario válido.', message);
        return;
    }

    const personajeBuscado = args.slice(1).join(' ').toLowerCase().trim();
    const sender = message.sender;
    const chatID = message.chat;

    const datos = obtenerDatos();
    const personajes = obtenerPersonajes();

    // Inicializar datos del chat si no existen
    if (!datos.chats[chatID]) {
        datos.chats[chatID] = { usuarios: {}, personajesReservados: [] };
    }

    const senderData = datos.chats[chatID].usuarios[sender];
    if (!senderData || senderData.characters.length === 0) {
        conn.reply(message.chat, 'No tienes personajes en tu inventario.', message);
        return;
    }

    const personajeIndex = senderData.characters.findIndex(
        (p) => p.name.toLowerCase() === personajeBuscado
    );

    if (personajeIndex === -1) {
        conn.reply(message.chat, `No tienes el personaje "${personajeBuscado}" en tu inventario.`, message);
        return;
    }

    const personajeData = personajes.find(
        (p) => p.name.toLowerCase() === personajeBuscado
    );

    if (!personajeData) {
        conn.reply(message.chat, `El personaje "${personajeBuscado}" no se encontró en la base de datos.`, message);
        return;
    }

    const personajeTransferido = {
        name: senderData.characters[personajeIndex].name,
        value: personajeData.value,
        url: personajeData.url,
    };

    if (!datos.chats[chatID].usuarios[mentionedUser]) {
        datos.chats[chatID].usuarios[mentionedUser] = {
            characterCount: 0,
            totalRwcoins: 0,
            characters: [],
        };
    }

    const receptorData = datos.chats[chatID].usuarios[mentionedUser];
    receptorData.characters.push(personajeTransferido);
    receptorData.characterCount++;
    receptorData.totalRwcoins += personajeTransferido.value;

    // Actualizar datos del emisor
    senderData.characters.splice(personajeIndex, 1);
    senderData.characterCount--;
    senderData.totalRwcoins -= personajeTransferido.value;

    // Guardar cambios
    datos.chats[chatID].usuarios[sender] = senderData;
    datos.chats[chatID].usuarios[mentionedUser] = receptorData;
    guardarDatos(datos);

    // Responder con éxito
    const senderName = await conn.getName(sender);
    const mentionedName = await conn.getName(mentionedUser);
    const mensajeTransferencia = `✄1�7 El personaje "${personajeTransferido.name}" ahora es de @${mentionedUser.split('@')[0]}.\n🌟 Valor: ${personajeTransferido.value} RWcoins.`;

    await conn.sendMessage(
        chatID,
        {
            image: { url: personajeTransferido.url },
            caption: mensajeTransferencia,
            mentions: [mentionedUser, sender],
        },
        { quoted: message }
    );
};

// Configuración del handler
handler.command = ['darrw'];
handler.tags = ['group'];
handler.help = ['darrw @usuario <personaje>'];
handler.group = true;
handler.register = false;

export default handler;