import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => {
    return (
        <div>
            <WeatherLocation city="Cordoba,ar"/>
            <WeatherLocation city="Buenos Aires,ar"/>
            <WeatherLocation city="London,uk"/>
        </div>
    );
};

export default LocationList;