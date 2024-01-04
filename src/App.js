import React, { useEffect, useState } from 'react';
import GlobalStyles from "./Styles/GlobalStyles";
import WeatherCard from "./Components/WeatherCard";
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";
import WeatherDetailsScreen from './Pages/WeatherDetailsScreen';

const apikey = process.env.REACT_APP_API_KEY;

function App() {

  const [input, setInput] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [coord, setCoord] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false); // State to track button click

  // Weather data for weather card
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeatherData();
  }, [input]);

  // Weekly data for accordion
  useEffect(() => {
    const fetchWeeklyData = async () => {
      try {
        if (coord) {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=hourly,minutely&appid=${apikey}&units=metric`);
          const data = await response.json();
          console.log('DATA INSIDE USEEFFECT', data);
          setWeatherDetails(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (coord && buttonClicked) {
      fetchWeeklyData();
    }
  }, [coord, buttonClicked]);

  // Button click handler to set coordinates
  const handleButtonClick = (newCoord) => {
    setCoord(newCoord);
    setButtonClicked(true);
  };

  return (
    <div className="App">
      {/* <Header /> */}
      <GlobalStyles />
      <SearchBar input={input} setInput={setInput} />
      <WeatherCard input={input} weatherData={weatherData} onButtonClick={handleButtonClick} />
      {weatherDetails && <WeatherDetailsScreen weatherDetails={weatherDetails} />}
    </div>
  );
}

export default App;
