import { getWeather } from "../api/weather";
import { useState, useEffect } from "react";

function useWeather(city) {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const getData = async () => {
      const tmp = await getWeather(city.position);
      setWeather(tmp);
    };

    getData();
  }, [city]);

  return weather;
}

export default useWeather;
