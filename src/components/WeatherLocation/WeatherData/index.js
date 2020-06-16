import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { CLOUD, SUN, CLOUDY } from '../../../constants/weathers';
import './styles.css';

const WeatherData = () => {
    return(
        <div className='weatherDataCont'>
            <WeatherTemperature temperature={30} weatherState={SUN}/>
            <WeatherExtraInfo humidity={70} wind={"5 m/s"}/>
        </div>
    );
};

export default WeatherData;