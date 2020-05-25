import React from 'react';
import styled from '@emotion/styled';
import Location from './Location';
import Icon from './Icon';
import Condition from './Condition';

const WeatherCard = (props) => {
    const tempMin = 21;
    const tempMax = 60; 
    let greenValueHigh = (1 - (props.temp - tempMin)/(tempMax - tempMin)) * 255; 
    let greenValueLow = greenValueHigh - 150; 

    const Card = styled.div`
        margin: 0 auto;
        background: linear-gradient(
            to top, 
            rgba(255, ${greenValueHigh}, 0), 
            rgba(255, ${greenValueLow}, 0)
        );
        width: 200px;
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 15px;
    `

    return(
        <Card>
            <Location/>
            <Icon/>
            <Condition/>
        </Card>
    );
}

export default WeatherCard;