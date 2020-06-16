import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = () => {
    //return de la estructura del componente
    return(
    <div className='weatherLocationCont'>
        <Location city='Córdoba'/>
        <WeatherData/>
    </div>
    );
}

export default WeatherLocation;