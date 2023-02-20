import clsx from "clsx";

// Component
import TodayBox from "./TodayBox";

// Redux
import { useSelector } from "react-redux";
import { useGetWeatherQuery } from "../store/";

function CityToday({ className }) {
  const city = useSelector((state) =>
    state.cities.filter((city) => city.current).pop()
  );
  const {
    data: weather,
    error,
    isLoading,
    isSuccess,
  } = useGetWeatherQuery(city);

  const classes = clsx(className);

  return (
    <div className={classes}>
      <h3 className="my-4 text-2xl font-semibold">Today</h3>

      {isSuccess ? <TodayBox weather={weather} /> : null}
    </div>
  );
}

export default CityToday;
