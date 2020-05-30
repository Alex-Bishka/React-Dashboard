import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) => {

    const Icon = styled.img`
        width: 40%;
    `

    let icon = "";
    switch (props.condition) {
        case "Clouds":
            icon = `./assets/Mostly Cloudy-2x.png`;
            break;
        case "Clear":
            icon = `./assets/Mostly Sunny-2x.png`;
            break;
        case "Haze":
            icon = `./assets/Haze-2x.png`;
            break;
        case "Hail":
            icon = `./assets/Hail-2x.png`;
            break;
        case "Fog":
            icon = `./assets/Fog-2x.png`;
            break;
        case "Tornado":
            icon = `./assets/Tornado-2x.png`;
            break;
        case "Dust":
            icon = `./assets/Dust-2x.png`;
            break;
        case "Mist":
            icon = `./assets/Fog-2x.png`;
            break;
        case "Snow":
            icon = `./assets/Snow-2x.png`;
            break;
        case "Rain":
            icon = `./assets/Rain-2x.png`;
            break;
        case "Drizzle":
            icon = `./assets/Drizzle-2x.png`;
            break;
        case "Thunderstorm":
            icon = `./assets/Severe Thunderstorm-2x.png`;
            break;
        default:
            icon = `./assets/Fog-2x.png`;
            break;
    }

    return (
        <Icon  
            src = {icon} 
            alt = "Weather Icon"
        />     
    )
} 

export default Icon;