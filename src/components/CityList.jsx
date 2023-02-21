import clsx from "clsx";

// Components
import CityAdd from "./CityAdd";
import CityCard from "./CityCard";

// Redux
import { useSelector } from "react-redux";

function CityList({ className }) {
  const classes = clsx(className);

  const cities = useSelector((state) =>
    state.cities.filter((city) => !city.current)
  );

  return (
    <div className={classes}>
      <CityAdd />

      <div className="relative">
        <div className="flex max-h-96 flex-col space-y-3 overflow-scroll py-4">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
        <div className="pointer-events-none absolute top-0 h-5 w-full bg-gradient-to-b from-stone-300 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 h-5 w-full bg-gradient-to-t from-stone-300 to-transparent" />
      </div>
    </div>
  );
}

export default CityList;
