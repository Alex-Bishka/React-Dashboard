import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) => {

    const WeatherIcon = styled.img`
        width: 40%
    `

    return (
       <>
            <WeatherIcon className = 'weatherIcon' src = "./assets/cloudy.png" alt = "Weather Icon"/>
       </>
    )
} 

export default Icon;