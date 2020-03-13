import React, { Component } from 'react'
import Weather from './app_component/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
class App extends Component {
  render() {
    return (
      <div>
        <Weather />
      </div>
    );
  }
}



export default App;