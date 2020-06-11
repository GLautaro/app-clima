import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => {
    //return de la estructura del componente
    return(
    <div>
        <Location city='Córdoba'/>
        <WeatherData/>
    </div>
    );
}

export default WeatherLocation;