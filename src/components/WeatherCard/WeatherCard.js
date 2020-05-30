import React from 'react';
import styled from '@emotion/styled';
import Location from './Location';
import Icon from './Icon';
import Condition from './Condition';

const WeatherCard = ({temp, condition, city, country}) => {
    const tempMinCold = -30;
    const tempMaxCold = 15;
    const tempMinHot = 15;
    const tempMaxHot = 60;
    let greenValueHigh = null;
    let greenValueLow = null;
    let bg = null;
    if (temp > 21) { // warm weather
        greenValueHigh = (1 - (temp - tempMinHot)/(tempMaxHot - tempMinHot)) * 255; 
        greenValueLow = greenValueHigh - 150; 
        bg = `linear-gradient(
            to top, 
            rgba(255, ${greenValueHigh}, 0), 
            rgba(255, ${greenValueLow}, 0)
        );`
    } else if (temp <= 21) { // cold weather - not totally satisfied with this range
        greenValueHigh = (1 - ((temp) - tempMinCold)/(tempMaxCold - tempMinCold)) * 255;
        greenValueLow = greenValueHigh - 150
        bg = `linear-gradient(
            to top, 
            rgba(0, ${greenValueHigh}, 255), 
            rgba(0, ${greenValueLow}, 255)
        );`
    }
    const Card = styled.div`
        margin: 0 auto;
        background: ${bg};
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
            <Location city = {city} country = {country}/>
            <Icon condition = {condition}/>
            <Condition temp = {temp} condition = {condition}/>
        </Card>
    );
}

export default WeatherCard;