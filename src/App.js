import React, { Component } from 'react';
import './App.css';
import LocationList from './Components/WeatherLocation/LocationList'
import { render } from '@testing-library/react';

const cities = [
  'Zapopan,mx',
  'Sidney,au',
  'Tokyo,jp',
  'Madrid,es',
  'Washington,us'
];



class App extends Component {

  constructor(){
    super();
    this.state = {
      city: null
    }
  }

  handleLocationSelect = city => {
    console.log(`Evento desde app, ciudad: ${city}`);
    this.setState({city})
  }

  render() {
    const {city} = this.state
      return(
      <div className="App">
        <LocationList cities={cities} onSelectedLocation={this.handleLocationSelect}/>

      {city ?
      <span>{city}</span> :
      <h5>No hay</h5>
      }
      </div>
      );
  }
}

export default App;
