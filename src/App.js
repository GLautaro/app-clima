import React from 'react';
import './App.css';
import LocationList from './components/LocationList';
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


function App() {

  const handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`)
  }

  return (
    <Grid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant='h6'>Aplicación del Clima</Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <LocationList cities={cities} onSelectedLocation={handleSelectedLocation}/>
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
            <div className="details">
              <ForecastExtended city={"Cordoba"}/>
            </div>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
