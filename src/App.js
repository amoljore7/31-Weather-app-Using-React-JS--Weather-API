import React, { Component } from 'react'
import Weather from './app_component/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

const API_KEY='15425263b2c773fb1becc2ee0fe76deb';
// api.openweathermap.org/data/2.5/weather?q=London,uk
class App extends Component { 
  constructor(){
    super();
    this.state={
      city: undefined,
      country: undefined,
    }
    this.getWeather();
  }

  getWeather = async()=>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
      const response = api_call.json();

      console.log(response)
  }

  render() {
    return (
      <div>
        <Weather />
      </div>
    );
  }
}



export default App;