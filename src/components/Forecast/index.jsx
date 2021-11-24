import { useContext } from "react";
import {
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaTemperatureLow,
  FaWind,
} from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import DataContext from "../../context/DataContext";
import "./index.scss";

export const Forecast = () => {
  const {
    temperature,
    weatherIcon,
    description,
    max_temperature,
    min_temperature,
    humidity,
    feels_like,
    wind,
    getDateTime,
    city_name,
  } = useContext(DataContext);

  return (
    <div className="weather_container">
      <h1 className="city_name">{city_name}</h1>
      <p className="date_time">{getDateTime()}</p>
      <p className="temperature">{temperature} °C</p>
      <hr />
      <p className="description">
        <img src={weatherIcon} alt="" /> {description}
      </p>
      <p className="temp_max-min">
        {min_temperature} °C
        <FaLongArrowAltDown className="arrow-down" />
        <FaLongArrowAltUp className="arrow-up" />
        {max_temperature} °C
      </p>

      <div className="wheater_more-info">
        <p className="humidity">
          <WiHumidity /> {humidity}%
        </p>
        <p className="feels_like">
          <FaTemperatureLow /> {feels_like}°C
        </p>
        <p className="wind_speed">
          <FaWind /> {wind}
        </p>
      </div>
    </div>
  );
};
