import Accordion from '../Components/Accordion';

function WeatherDetailsScreen({ weatherDetails }) {


  return <div className='containerAccordion'>

    {weatherDetails.daily.map((day, i) => {
      if (i === 0 || i >= 8) return null; // Skip the first day and days beyond the first week
      return <Accordion key={day.dt} weatherDataPerDay={day} />;
    })}

  </div>;
}

export default WeatherDetailsScreen
