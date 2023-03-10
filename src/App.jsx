import CityMain from "./components/CityMain";
import CityList from "./components/CityList";
import CityToday from "./components/CityToday";
import CityTabs from "./components/CityTabs";
import CitySearch from "./components/CitySearch";
import Geolocate from "./components/Geolocate";

function App() {
  return (
    <>
      <div className="mt-6 grid h-screen grid-cols-6 grid-rows-4 gap-x-11 gap-y-8">
        <CityMain className="col-span-4 row-span-2" />
        <CityList className="col-span-2 row-span-2" />
        <CityToday className="row-span-2" />
        <CityTabs className="col-span-3 row-span-2" />
        <CitySearch className="col-span-2" />
        <Geolocate className="col-span-2" />
      </div>
    </>
  );
}

export default App;
