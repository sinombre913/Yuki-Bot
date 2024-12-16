/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/

import fs from 'fs';

const obtenerDatos = () => {
    if (fs.existsSync('data.json')) {
        return JSON.parse(fs.readFileSync('data.json', 'utf-8'));
    } else {
        return { usuarios: {}, personajesReservados: [] };
    }
};

const guardarDatos = (data) => {
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
};

const limpiarPersonajesReservados = () => {
    let data = obtenerDatos();
    data.personajesReservados = [];
    guardarDatos(data);
    console.log('Se han eliminado todos los personajes reservados.');
};

setInterval(limpiarPersonajesReservados, 1800000); //30 minutos :v

limpiarPersonajesReservados();