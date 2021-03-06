import axios from 'axios';

const API_KEY = '3f55a667978a1d578a52d85121796a8b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request received');
    console.log(request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
