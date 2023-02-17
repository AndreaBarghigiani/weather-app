import { useDispatch, useSelector } from "react-redux";

function CitiesCards() {
  const cities = useSelector((state) =>
    state.cities.filter((city) => !city.current)
  );

  return (
    <>
      {cities.map((city) => (
        <li key={city.name}>{city.name}</li>
      ))}
    </>
  );
}

export default CitiesCards;
