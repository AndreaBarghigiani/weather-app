import clsx from "clsx";

// Redux
import { useDispatch } from "react-redux";
import { useGetWeatherQuery, setCurrentCity } from "../store/";

// Date
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

// import useDayLight from "../hooks/useDayLight";
import { isDayLight } from "../utils";

function CityCard({ city }) {
  const dispatch = useDispatch();
  const {
    data: weather,
    error,
    isLoading,
    isSuccess,
  } = useGetWeatherQuery(city);

  const cityDate = weather ? dayjs().tz(weather.timezone) : null;
  const temp = weather ? weather.current.temp : null;
  const icon = weather ? weather.current.weather[0].icon : null;

  const isSunUp = isDayLight(
    cityDate,
    weather?.current?.sunrise,
    weather?.current?.sunset
  );

  const handleCitySelection = () => {
    dispatch(setCurrentCity(city));
  };

  const classes = clsx(
    "grid grid-cols-3 items-center rounded-xl p-4 text-white shadow-xl cursor-pointer",
    {
      "bg-blue-600": isSunUp,
      "bg-blue-900": !isSunUp,
    }
  );

  return (
    <div className={classes} onClick={handleCitySelection}>
      <header>
        <h2 className="text-3xl font-semibold">{city.name}</h2>
        {cityDate ? (
          <time className="text-sm font-medium" dateTime={cityDate.format()}>
            {cityDate.format("dddd DD,")}
            <br />
            {cityDate.format("MMMM")}
          </time>
        ) : null}
      </header>
      <img className="mx-auto h-24 w-24" src={`/icons/${icon}.svg`} />
      <p className="ml-auto text-center text-4xl font-bold text-white">
        {Math.floor(temp)}&deg;
      </p>
    </div>
  );
}

export default CityCard;
