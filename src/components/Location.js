import React from 'react';

const Location = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.city}</h1>
        </div>
    );
};

export default Location;