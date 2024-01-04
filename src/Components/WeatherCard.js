import { MdEast } from "react-icons/md";

const WeatherCard = ({ weatherData, onButtonClick }) => {
    const city = weatherData?.name;
    const temp = weatherData?.main?.temp;
    const min_temp = weatherData?.main?.temp_min;
    const max_temp = weatherData?.main?.temp_max;
    const humidity = weatherData?.main?.humidity;
    const current = new Date();
    const date = `${current.getDate()} /${current.getMonth() + 1}/${current.getFullYear()}`;

    // Function to handle button click and pass coordinates
    const handleButtonClick = () => {
        // Assuming weatherData.coord contains the coordinates
        onButtonClick(weatherData.coord);
    };

    return (
        <div className='cardView'>
            <div className='header'>Weather Forecast</div>
            {typeof weatherData.main === 'undefined' ? (
                <div>
                    <p className="welcome">In for a walk, enter your city</p>
                </div>
            ) : (
                <div className="displayDataResult">
                    <h2 className="name">{city}</h2>
                    <p className="date">{date}</p>
                    <img className="weatherIcon" alt="weathericon" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} />
                    <p className="temp">Temp: {Math.round(temp)}<span>&#8451;</span> </p>
                    <p className="min-temp">Min-temp:{Math.round(min_temp)}<span>&#8451;</span> </p>
                    <p className="max-temp">Max-temp: {Math.round(max_temp)}<span>&#8451;</span> </p>
                    <p className="humidity">Humidity: {humidity}%</p>
                    {/* Button with onClick handler */}
                    <button className='getWeeklyDetails' onClick={handleButtonClick}>
                        <p>Weekly Details</p> <MdEast className='iconArrowBtn' />
                    </button>
                </div>
            )}
        </div>
    );
}

export default WeatherCard;
