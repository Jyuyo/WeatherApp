import React, { Component } from 'react';
import './App.css';
import LocationList from './Components/WeatherLocation/LocationList'
import {Grid,Col,Raw, Row} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <ToolBar>
                <Typography variant='title' color='inherit'>
                  WeatherApp
                </Typography>
              </ToolBar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities} onSelectedLocation={this.handleLocationSelect}/>
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className='details'>
                {city ?
                  <span>{city}</span> :
                  <h5>No hay</h5>
                }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      );
  }
}

/*<div className="App">
        <LocationList cities={cities} onSelectedLocation={this.handleLocationSelect}/>

      {city ?
      <span>{city}</span> :
      <h5>No hay</h5>
      }
      </div>*/ 

export default App;
