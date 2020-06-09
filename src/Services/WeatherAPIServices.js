import {api_key, url_base_weather} from '../Constants/api_url';
import * as States from '../Constants/WeatherStates';

export const getUrlWeatherCity = city => {
    return `${url_base_weather}?q=${city}&appid=${api_key}&units=metric`
};

export const transformWeatherData = apiWeatherData => {
    const {temp, humidity} = apiWeatherData.main;
    const {speed} = apiWeatherData.wind;
    const weatherState = States.SNOW;

    const convetedData ={
        temperature: temp,
        weatherState,
        wind: speed,
        humidity,
    }

    return convetedData;
}