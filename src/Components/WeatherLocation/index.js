import React, {Component} from 'react';
import './styles.css';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import * as WeatherAPIServices from '../../Services/WeatherAPIServices';

const city = 'GDL';

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city: 'Guadalajara,mx',
            data: null,
        };
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    handleUpdateClick = () => {
        const city = 'Guadalajara,mx'
        fetch(WeatherAPIServices.getUrlWeatherCity(city)).then(resolve => {
            return resolve.json();
        }).then(data => {
            this.setState({
                city,
                data: WeatherAPIServices.transformWeatherData(data),
            })
        });    

    }

    render(){
        const {city, data} = this.state;

        return (<div className='weatherLocationContainer'>
            <Location city={city}/>
            {data ? 
            <WeatherData data={data}/> :
            "Loading..."
            }
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>);

    }

};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;
