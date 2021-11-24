import { useContext, useEffect, useState } from "react";
import DataContext from "../../context/DataContext";
import "./index.scss";

import { Form } from "../Form";
import { Error } from "../Error";
import { Loading } from "../Loader";
import { Forecast } from "../Forecast";

export const Main = () => {
  const { data, isError, isLoading, weather_condition } =
    useContext(DataContext);

  const setBackgroundImage = (value) => {
    if (value === "Clear") {
      return "main_wrapper sunny";
    } else if (value === "Clouds") {
      return "main_wrapper cloudy";
    } else if (
      value === "Rain" ||
      value === "Drizzle" ||
      value === "Thunderstorm"
    ) {
      return "main_wrapper rainy";
    }
    return "main_wrapper";
  };

  return (
    <section className="main_container">
      <h1 className="title">Previsão do Tempo</h1>
      <article className={setBackgroundImage(weather_condition)}>
        {!data && (
          <>
            {!isLoading && <Form />}

            {isError && <Error />}

            {isLoading && <Loading />}
          </>
        )}

        {data && (
          <>
            <Forecast />
            <Form />
          </>
        )}
      </article>
    </section>
  );
};
