import React, { useEffect, useState } from 'react';
import GlobalStyles from "./Styles/GlobalStyles";
import WeatherCard from "./Components/WeatherCard";
import SearchBar from "./Components/SearchBar";
import WeatherDetailsScreen from './Pages/WeatherDetailsScreen';

const apikey = process.env.REACT_APP_API_KEY;

function App() {
  const [input, setInput] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [coord, setCoord] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  // Weather data for weather card
  useEffect(() => {
    const fetchWeatherData = async () => {
      console.log('WeatherCard useEffect rendering...');
      try {
        if (input.trim() !== '') {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`);
          const data = await response.json();
          setWeatherData(data);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        //TODO loader
      }
    }

    // Debounce logic
    const debounceTimer = setTimeout(() => {
      fetchWeatherData();
    }, 300);

    return () => {
      console.log('WeatherCard cleanup...');
      clearTimeout(debounceTimer);
    }
  }, [input, buttonClicked]);

  // Weekly data for accordion
  useEffect(() => {
    const fetchWeeklyData = async () => {
      try {
        if (coord) {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=hourly,minutely&appid=${apikey}&units=metric`);
          const data = await response.json();
          setWeatherDetails(data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (coord && buttonClicked) {
      fetchWeeklyData();
    }
  }, [coord, buttonClicked]);

  // Reset weatherDetails when input changes
  useEffect(() => {
    setWeatherDetails(null);
  }, [input]);

  // Button click handler to set coordinates
  const handleButtonClick = (newCoord) => {
    setCoord(newCoord);
    setButtonClicked(true);
  };

  // Callback function to reset weatherData and weatherDetails
  const resetWeatherData = () => {
    setWeatherData([]);
    setWeatherDetails(null);
  };

  return (
    <div className='App'>s
      <GlobalStyles />
      <SearchBar input={input} setInput={setInput} resetWeatherData={resetWeatherData} />
      <WeatherCard input={input} weatherData={weatherData} onButtonClick={handleButtonClick} />
      {weatherDetails && <WeatherDetailsScreen weatherDetails={weatherDetails} />}
    </div>
  );
}

export default App;
