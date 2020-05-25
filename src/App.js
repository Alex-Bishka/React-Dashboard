import React from 'react';
// imported libraries from react

// own imports
import WeatherCard from './components/WeatherCard/WeatherCard';
import './App.css';


function App() {
  return (
    <div className="App">
      <WeatherCard temp = '30'/>
    </div>
  );
}

export default App;
