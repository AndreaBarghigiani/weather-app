import clsx from "clsx";

// Components
import CityTemp from "./CityTemp";

// Redux
import { useSelector } from "react-redux";
import { useGetWeatherQuery } from "../store/slices/weatherApiSlice";

// Date
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

function CityMain({ className }) {
  const city = useSelector((state) =>
    state.cities.filter((city) => city.current).pop()
  );
  const {
    data: weather,
    error,
    isLoading,
    isSuccess,
  } = useGetWeatherQuery(city);
  const cityDate = weather ? dayjs().tz(weather.timezone) : null;
  const classes = clsx(
    className,
    "rounded-xl relative py-10 px-16 bg-right-top bg-[url('/turin.jpg')]",
    {
      "text-md": true,
    }
  );

  if (isLoading) return "wait for it...";

  return (
    <div className={classes}>
      <p className="text-xl">{city.name}</p>

      {cityDate ? (
        <time dateTime={cityDate.format()}>
          {cityDate.format("dddd DD, MMMM")}
        </time>
      ) : null}

      {isSuccess ? (
        <CityTemp
          className="absolute -left-7 top-1/2 -translate-y-1/2 transform"
          weather={weather}
        />
      ) : null}
    </div>
  );
}

export default CityMain;
