import axios from "axios";

const getWeather = async ({ lat, lon }) => {
  const params = {
    lat,
    lon,
    appid: import.meta.env.VITE_WEATHER_KEY,
    units: "metric",
  };

  const { data } = await axios.get(
    `https://api.openweathermap.org/data/3.0/onecall`,
    { params }
  );

  return data;
};

export { getWeather };
