import React, { useState } from 'react';
import { FcExpand } from "react-icons/fc";
import { StyledAccordion } from './styled/Accordion.styled';
import ConvertDate from './FormattedDate';


function Accordion({ weatherDataPerDay }) {

    const [isActive, setIsActive] = useState(false)
    const morn_temp = weatherDataPerDay.temp.morn
    const day_temp = weatherDataPerDay.temp.day
    const day_eve = weatherDataPerDay.temp.eve
    const day_night = weatherDataPerDay.temp.night
    const min_temp = weatherDataPerDay.temp.min
    const max_temp = weatherDataPerDay.temp.max


    return (

        <StyledAccordion>
            <StyledAccordion className={`accordion ${isActive ? "active" : "true"}`} onClick={() => setIsActive(!isActive)}>

                <p><ConvertDate date={weatherDataPerDay.dt} /></p>
                <img className="weatherIcon" alt="weeklyweather" src={`https://openweathermap.org/img/wn/${weatherDataPerDay.weather[0].icon}@4x.png`} />
                <p>{Math.round(min_temp)}C°/{Math.round(max_temp)}C°</p>
                < FcExpand className="iconDropDown" />


            </StyledAccordion>
            <StyledAccordion className={`accordion ${!isActive ? "collapsed" : ""}`}>
                <div className='grid-item'>Temp:</div>
                <div className='grid-item'>Morning<div>{Math.round(morn_temp)}C°</div></div>
                <div className='grid-item'>Afternoon<div>{Math.round(day_temp)}C°</div></div>
                <div className='grid-item'>Evening<div>{Math.round(day_eve)}C°</div></div>
                <div className='grid-item'>Night<div>{Math.round(day_night)}C°</div></div>
            </StyledAccordion>
        </StyledAccordion>

    );



}

export default Accordion;
