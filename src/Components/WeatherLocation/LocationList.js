import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css'

import WeatherLocation from '../WeatherLocation'

const LocationList = ({cities, onSelectedLocation}) => {

    const handleWeatherLocationClick = city => {
        console.log(`Evento desde LocationList, ciudad: ${city}`);
        onSelectedLocation(city);
    }

    const getComponentsFromCities = cities =>(
        cities.map(city =>(
            <WeatherLocation city={city}
            key={city}
            onWeatherLocationClick={() => handleWeatherLocationClick(city)}/>
        ))
    );

    return (
        <div className='locationListContainer'>
            {getComponentsFromCities(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired,
};

export default LocationList;

