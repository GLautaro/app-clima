import { api_key, url_base } from '../constants/api_url';

const getUrlWeatherCity = city => {
    return `${url_base}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherCity;