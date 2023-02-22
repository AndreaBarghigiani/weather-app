import clsx from "clsx";

// Components
import CityTemp from "./CityTemp";

// Redux
import { useSelector } from "react-redux";
import { useGetWeatherQuery } from "../store/";

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
    "rounded-xl relative flex items-start py-10 px-32 bg-right-top bg-[url('/turin.jpg')] max-h-[440px] shadow-app"
  );

  if (isLoading) return "wait for it...";

  return (
    <div className={classes}>
      <div className="absolute top-1/2 -left-8  flex -translate-y-1/2 transform">
        {isSuccess ? <CityTemp className="mr-8" weather={weather} /> : null}
        <div className="flex flex-col space-y-1 text-app-text">
          <p className="text-2xl font-semibold">{city.name}</p>

          {cityDate ? (
            <time className="font-medium" dateTime={cityDate.format()}>
              {cityDate.format("dddd DD, MMMM")}
            </time>
          ) : null}
          {isSuccess ? <p>{weather.current.weather[0].main}</p> : null}
        </div>
      </div>
    </div>
  );
}

export default CityMain;
