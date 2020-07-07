import React, { Component } from 'react';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtended from './components/ForecastExtended';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';


const cities = [
  "Cordoba,ar",
  "Madrid,es",
  "Tokio,jp",
  "Lima,pe",
  "Teheran,ir",
]


class App extends Component {

  constructor() {
    super();
    this.state = {
      city: null,
    }
  }

  render() {
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h6' color='inherit'>Weather App</Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer 
              cities={cities} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
               <div className="details">
                 { city && <ForecastExtended city={city}/> }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  };
}

export default App;

