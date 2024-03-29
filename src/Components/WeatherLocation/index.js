import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import './styles.css';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import * as WeatherAPIServices from '../../Services/WeatherAPIServices';

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city: 'Guadalajara,mx',
            data: null,
        };
    }

    componentDidMount(){
        this.handleUpdateWeather();
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    handleUpdateWeather = () => {
        const {city} = this.props
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
        const {onWeatherLocationClick} = this.props;
        return (<div className='weatherLocationContainer' onClick={onWeatherLocationClick}>
            <Location city={city}/>
            {data ? 
            <WeatherData data={data}/> :
            <CircularProgress size={50}/>
            }
        </div>);

    }

};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
}

export default WeatherLocation;
