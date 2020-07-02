import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from '../services/transformForecast';
import getUrlForecastCity from '../services/getUrlForecastCity';
import './styles.css';


class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null,
        }
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({ forecastData: null })
            this.updateCity(nextProps.city);
        }
    }


    updateCity = city => {
        //fetch o axios
        const url = getUrlForecastCity(city);
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