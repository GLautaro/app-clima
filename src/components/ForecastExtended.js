import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from '../services/transformForecast';
import './styles.css';

/*
const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'sun',
    wind: '1 m/s',
}*/
const api_key = ""; //Copiar aca su api key
const url_base = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null,
        }
    }

    componentDidMount() {
        //fetch o axios
        const url = `${url_base}?q=${this.props.city}&appid=${api_key}`;
        fetch(url).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({
                    forecastData,
                })
            }
        )
    }

    renderForecastItemDays( forecastData ) {
        return forecastData.map( forecast => <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`} 
            weekDay={forecast.weekDay} 
            hour={forecast.hour}
            data={forecast.data}/>)
    }

    renderProgress() {
        return <h3>Cargando pronostico extendido...</h3>
    }

    render() {
        const { forecastData } = this.state;
        const { city } = this.props
        return (
            <div>
                <h2 className="forecast-title"> Pronostico extendido para {city} </h2>
                { forecastData ? 
                    this.renderForecastItemDays(forecastData) : 
                    this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;