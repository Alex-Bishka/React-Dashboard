import React from 'react';
// imported libraries from react

// own imports
import WeatherCard from './components/WeatherCard/WeatherCard';
import './App.css';


function App() {
  return (
    <div className="App">
      <WeatherCard temp = {21} condition = {"Clear"} city = {"Chicago"} country = {"USA"}/>
    </div>
  );
}

export default App;
