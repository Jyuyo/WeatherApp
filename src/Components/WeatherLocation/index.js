import React, {Component} from 'react';
import './styles.css';
import Location from './Location';
import WeatherData from './WeatherData';
import * as States from '../../Constants/WeatherStates';
import PropTypes from 'prop-types';

const city = 'GDL';

const data = {
    temperature: 50,
    weatherState: States.SUNNY,
    wind: 40,
    humidity: 20,
};

const data2 = {
    temperature: 34,
    weatherState: States.SUNNY,
    wind: 56,
    humidity: 76,
};

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city: 'GDL',
            data,
        };
    }

    handleUpdateClick = () => {
        this.setState({
            city: 'PENE',
            data: data2,
        })
    }

    render(){
        const {city, data} = this.state;

        return (<div className='weatherLocationContainer'>
            <Location city={city}/>
            <WeatherData data={data}/>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>);

    }

};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;
