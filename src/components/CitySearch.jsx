import { useState, useRef } from "react";
import clsx from "clsx";

// Components
import SelectCity from "./SelectCity";
// Redux
import { useFindCityQuery } from "../store";

function CitySearch({ className }) {
  const inputTerm = useRef(null);
  const [skip, setSkip] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  let { data, isLoading, ...rest } = useFindCityQuery(searchTerm, { skip });
  console.log("rest:", rest);

  const classes = clsx(className);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`time to search`);
    setSearchTerm(inputTerm.current.value);
    setSkip(false);
  };

  const clearResults = () => {
    setSearchTerm();
    setSkip(true);
    data = null;
    inputTerm.current.value = "";
  };

  return (
    <div className={classes}>
      <h3 className="my-4 text-2xl font-semibold">Search</h3>

      <form
        className="flex h-24 items-stretch rounded-xl bg-white shadow-xl"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="ex: Miami"
          className="w-full rounded-xl p-4 ring-0 focus:outline-none"
          ref={inputTerm}
        />
        <button className="ml-auto rounded-xl bg-blue-500 p-4 text-white">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
      {isLoading ? "Loading..." : null}

      {data ? (
        <SelectCity cities={data} emtpySearchTerm={clearResults} />
      ) : null}
    </div>
  );
}

export default CitySearch;
