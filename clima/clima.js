const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=ef5af700bf8469552a42ed392437c882&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}