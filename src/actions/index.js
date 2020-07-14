import transformForecast from '../services/transformForecast';
import getUrlForecastCity from '../services/getUrlForecastCity';

export const SET_CITY = 'SET_CITY'; //ActionTypes
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload }) //ActionCreator

const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload})

export const setSelectedCity = payload => {
    return dispatch => {
        const url = getUrlForecastCity(payload);
        // Activar estado indicando que voy a buscar datos al servidor
        dispatch(setCity(payload));

        return fetch(url).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                // Modifica el estado de acuerdo a la respuesta del servidor
                dispatch(setForecastData({ city: payload, forecastData}))
            }
        )
    }
}