import clsx from "clsx";

// Components
import CityAdd from "./CityAdd";
import CityCard from "./CityCard";

// Redux
import { useSelector } from "react-redux";

function CityList({ className }) {
  const classes = clsx(className, "overflow-scroll ");

  const cities = useSelector((state) =>
    state.cities.filter((city) => !city.current)
  );

  return (
    <div className={classes}>
      <CityAdd />

      <div className="flex flex-col space-y-3 overflow-hidden">
        {cities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
}

export default CityList;
