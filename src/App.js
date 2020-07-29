import React from 'react';
import './App.css';

import Weather_component from './components/Weather_component';

//const Api_key=44f2e0222cafae724c2b6a53cacee4b3;
//const Api_call=api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key};

function App() {
  return (
    <div className="App">
	<Weather_component />    	
    </div>
  );
}

export default App;
