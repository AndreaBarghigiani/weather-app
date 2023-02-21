// Redux
import { useDispatch } from "react-redux";
import { addCustomCity } from "../store";

function SelectCity({ cities, emtpySearchTerm }) {
  return (
    <div className="flex max-h-24 flex-col space-y-3 overflow-scroll py-2">
      {cities.map((city) => (
        <SelectRow
          key={city.lat}
          city={city}
          emtpySearchTerm={emtpySearchTerm}
        />
      ))}
    </div>
  );
}

function SelectRow({ city, emtpySearchTerm }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addCustomCity(city));
    emtpySearchTerm("");
  };

  return (
    <div className="flex items-center rounded-xl border bg-white pl-4">
      <div>
        <h4>
          <span className="mr-2 font-semibold">{city.name}</span>
          <span className="text-sm">
            {city.state}, {city.country}
          </span>
        </h4>
      </div>
      <button
        className="ml-auto rounded-xl bg-blue-500 py-2 px-4 font-semibold text-white transition-colors hover:bg-blue-900"
        onClick={handleClick}
      >
        Select
      </button>
    </div>
  );
}

export default SelectCity;
