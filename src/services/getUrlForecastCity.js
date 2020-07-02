import { url_forecast, api_key } from '../constants/api_url';

const getUrlForecastCity = city => {
    return `${url_forecast}?q=${city}&appid=${api_key}`
}

export default getUrlForecastCity;