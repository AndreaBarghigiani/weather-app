// Redux
import { useDispatch } from "react-redux";
import { addCustomCity } from "../store";

function SelectCity({ cities, emtpySearchTerm }) {
  console.log("emtpySearchTerm:", emtpySearchTerm);
  return (
    <div className="mt-6 flex flex-col space-y-3">
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
    <div className="flex items-center rounded-xl border bg-white p-4">
      <div>
        <h4 className="font-semibold">{city.name}</h4>
        <p className="text-sm">
          {city.state}, {city.country}
        </p>
      </div>
      <button
        className="ml-auto rounded-xl bg-blue-500 p-4 font-semibold text-white transition-colors hover:bg-blue-900"
        onClick={handleClick}
      >
        Select
      </button>
    </div>
  );
}

export default SelectCity;
