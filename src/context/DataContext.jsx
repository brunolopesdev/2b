import { createContext, useEffect, useState } from "react";
import api from "../services/api";

const API_KEY = "f014ea8c66233637168adc96482c285e";
const API_LANG = "pt_br";

const DataContext = createContext();

function DataContextProvider(props) {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitLocation = async (value) => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/weather?q=${value}&units=metric&lang=${API_LANG}&appid=${API_KEY}`
      );

      if (response) {
        setData(response.data);
        setIsLoading(false);
        setIsError(false);
      }
    } catch (error) {
      if (error) {
        setIsError("Essa cidade/estado não existe");
        setIsLoading(false);
      }
    }
  };

  const getDateTime = () => {
    let today = new Date();
    let date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;

    return dateTime;
  };

  const city_name = data?.name;
  const weather_condition = data?.weather[0].main;
  const temperature = Math.round(data?.main.temp);
  const weatherIcon = `https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`;
  const description = data?.weather[0].description;
  const max_temperature = Math.round(data?.main.temp_max);
  const min_temperature = Math.round(data?.main.temp_min);
  const humidity = data?.main.humidity;
  const feels_like = Math.round(data?.main.feels_like);
  const wind = data?.wind.speed;

  return (
    <DataContext.Provider
      value={{
        data,
        isError,
        isLoading,
        temperature,
        weatherIcon,
        description,
        max_temperature,
        min_temperature,
        humidity,
        feels_like,
        wind,
        city_name,
        weather_condition,
        getDateTime,
        submitLocation,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;
export { DataContextProvider };
