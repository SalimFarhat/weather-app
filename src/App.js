import './App.css';
import Inputs from './Components/Inputs';
import TopButtons from './Components/TopButtons';
import TimeAndLocation from './Components/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails';
import Forecast from './Components/Forecast';
import getWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';
import getFormattedWeatherData from './services/weatherService';

function App() {

  const [query, setQuery] = useState({q: 'tokyo'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units}).then(data => {setWeather(data)});
    }
    fetchWeather();
  }, [query, units]);
  
  return (
    <div className='max-w-screen-md px-32 py-5 mx-auto mt-4 shadow-xl bg-gradient-to-br h-fit shadow-gray-400'>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
      {weather && (
        <div>
      <TimeAndLocation weather={weather}/>
      <TemperatureAndDetails weather={weather}/>
      <Forecast title="hourly forecast" items={weather.hourly}/>
      <Forecast title="daily forecast" items={weather.daily}/>
      </div>
    )}
    </div>
  );
}


export default App;
