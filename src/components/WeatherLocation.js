import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => {
    //return de la estructura del componente
    return(
    <div>
        <Location city='Alta Gracia'/>
        <WeatherData temperature='15°C'/>
    </div>
    );
}

export default WeatherLocation;