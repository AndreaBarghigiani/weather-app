import clsx from "clsx";
import { useState, useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { useFindCityCoordQuery, addCustomCity } from "../store";

// Loading
import LoadingIcon from "../assets/icon/loading";

function Geolocate({ className }) {
  const dispatch = useDispatch();
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [skip, setSkip] = useState(true);

  const { data, isLoading, error } = useFindCityCoordQuery(
    { lat, lon },
    { skip }
  );

  useEffect(() => {
    if (data) {
      dispatch(addCustomCity(data[0]));
    }
  }, [lat, lon, data]);

  const classes = clsx(className);

  const handleGeolocation = () => {
    // No geolocation no party
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setSkip(false);
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      () => {
        setStatus("Unable to retrieve your location");
      }
    );
  };

  return (
    <div className={classes}>
      <h3 className="my-4 text-2xl font-semibold text-app-500">Localization</h3>

      <button
        className="flex w-full flex-col items-center rounded-xl bg-blue-500 p-6 text-center text-white"
        onClick={handleGeolocation}
      >
        {isLoading ? (
          <LoadingIcon />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        )}

        {data && !skip ? (
          <span>You are in {data[0].name}</span>
        ) : (
          <span>Geolocate Me</span>
        )}
      </button>
    </div>
  );
}

export default Geolocate;
