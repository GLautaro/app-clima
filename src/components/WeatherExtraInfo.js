import React from 'react';

const WeatherExtraInfo = ({ humidity, wind }) => {
    return (
        <div>
            <span>{`Humedad: ${humidity}% - `}</span>
            <span>{`Viento: ${wind}`}</span>
        </div>
    );
};

export default WeatherExtraInfo;