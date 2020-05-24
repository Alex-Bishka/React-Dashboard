import React from 'react';

const WeatherCard = (props) => {
    return(
        // overarching container for the weather card
        <div className = "card">
            <div className = 'location'>
                <h1 className = 'city'>Sydney</h1>
                <h3 className = 'country'>Au</h3>
            </div>
            <img className = 'weatherIcon' src = "./assets/cloudy.png" alt = "Weather Icon"/>
            <h1 className = 'temp'>20 °C</h1>
            <h3 className = 'conidtion'>Cloudy</h3>
        </div>
    );
}

export default WeatherCard;