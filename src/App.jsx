import CityMain from "./components/CityMain";
import CityList from "./components/CityList";
import CityToday from "./components/CityToday";
import CityTabs from "./components/CityTabs";
import CitySearch from "./components/CitySearch";

function App() {
  return (
    <>
      <div className="grid h-screen grid-cols-5 grid-rows-4 gap-6">
        <CityMain className="col-span-3 row-span-2" />
        <CityList className="col-span-2 row-span-2" />
        <CityToday className="row-span-2" />
        <CityTabs className="col-span-2 row-span-2" />
        <CitySearch className="col-span-2" />
      </div>
    </>
  );
}

export default App;
