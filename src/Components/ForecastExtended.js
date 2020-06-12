import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {SUNNY} from '../Constants/WeatherStates'
import ForecastItem from './ForecastItem'

const data = {
    temperature: 45,
    weatherState: SUNNY,
    humidity: 25,
    wind: 5
}

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const hour = 10;

class ForecastExtended extends Component {

    renderForecastItemsDays(){
        return days.map(day =>{
            return(
            <ForecastItem
                key={`${day}${hour}`}
                weekday={day}
                hour={hour}
                data={data}/>
            )
        });
    }

    render() {
        const {city} = this.props;
        return (
            <div>
               <h3 className='forecast-title'> Forecast Extended for: {city}</h3> 
               <this.renderForecastItemsDays/>
            </div>
        );
    }
}

ForecastExtended.propTypes = {

};

export default ForecastExtended;