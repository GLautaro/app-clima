import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = () => {
    return(
        <div>
            <WeatherTemperature temperature={20} weatherState={"fog"}/>
            <WeatherExtraInfo humidity={70} wind={"5 m/s"}/>
        </div>
    );
};

export default WeatherData;