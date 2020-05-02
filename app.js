

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion d la ciudad par obtener el clima',
        demand: true
    }
}).argv;



const getInfo = async (direccion) => {
    try {
        const cords = await lugar.getLugarLatitud(direccion);
        const temp = await clima.getClima(cords.lat, cords.lng);
        return `El clima de ${ cords.direccion } es de ${ temp }`
    } catch (error) {
        return `No se pudo determinar el clima de la region ${ direccion }`        
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);