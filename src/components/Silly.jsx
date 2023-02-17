import useWeather from "../hooks/useWeather";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Date
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

function Silly() {
  const dispatch = useDispatch();
  const city = useSelector((state) =>
    state.cities.filter((city) => city.current).pop()
  );
  const weather = useWeather(city);
  const cityDate = weather ? dayjs().tz(weather.timezone) : null;

  const handleClick = () => {
    dispatch(change({ lat: 10, lon: 10 }));
  };

  return (
    <div>
      <p className="text-xl">{city.name}</p>
      <p>The temp is {weather?.current?.temp}</p>
      {cityDate ? (
        <time dateTime={cityDate.format()}>
          {cityDate.format("dddd DD, MMMM")}
        </time>
      ) : null}
      <button onClick={handleClick}>Change City</button>
    </div>
  );
}

export default Silly;
