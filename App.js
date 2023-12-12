import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const[temperature,setweather]=useState(0)
  const[city,setcity]=useState("paris")
  useEffect(()=>{
    getweather(48.85,2.35,"paris")

  },[])


  function getweather(lattitude,longitude,location){
    axios.get("https://api.open-meteo.com/v1/forecast?latitude="+lattitude+"&longitude="+longitude+"&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")
    .then(data=>{
     const temp= (data.data.current_weather.temperature)
     setweather(temp)
     setcity(location)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <>
    <main>
      <h1>WEATHER APP</h1>
      <p>The cureent temperature at {city} is <span id="temp">{temperature}°C</span></p>
      <div>
        <button onClick={getweather(9.93,76.26,"kochi")}>kochi</button>
        <button onClick={getweather(8.2,76.9,"kozhikode")}>kozhikode</button>
        <button onClick={getweather(11.25,75.6,"trivandrum")}>Trivandrum</button>
      </div>
    </main>
    
    </>
  );
}

export default App;
