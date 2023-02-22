//Redux
import { useDispatch } from "react-redux";
import { addRandomCity } from "../store";

function CityAdd() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addRandomCity());
  };

  return (
    <button
      className="mx-auto flex font-semibold text-app-text"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mr-3 h-6 w-6 rounded border border-app-text"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      Add city
    </button>
  );
}

export default CityAdd;
