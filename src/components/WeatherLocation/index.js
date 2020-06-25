//React
import React, { Component } from 'react';

//Componentes
import Location from './Location';
import WeatherData from './WeatherData';

//Estilos
import './styles.css';

//Servicios
import transformWeather from '../../services/transformWeather';
import getUrlWeatherCity from '../../services/getUrlWeatherCity';

//Constantes
import { CLOUD, SUN, CLOUDY } from '../../constants/weathers';
import { api_weather } from '../../constants/api_url';

//Librerias externas
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';


class WeatherLocation extends Component{

    constructor(props){
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
    }


    handleUpdateClick = () => {
        const api_weather = getUrlWeatherCity(this.state.city);
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather,
            });
        });
    }

    render() {
        const { city, data } = this.state;
        const { onWeatherLocationClick } = this.props;

        return(
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city}/>
                { data ? <WeatherData data={data}/> : <CircularProgress/> }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
}

export default WeatherLocation;