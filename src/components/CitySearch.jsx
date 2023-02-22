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

  const { data, isLoading, error } = useFindCityQuery(searchTerm, { skip });

  const classes = clsx(className, "mx-6");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputTerm.current.value);
    setSkip(false);
  };

  const clearResults = () => {
    setSearchTerm();
    setSkip(true);
    inputTerm.current.value = "";
  };

  return (
    <div className={classes}>
      <h3 className="my-4 ml-4 text-2xl font-semibold text-app-text">Search</h3>

      <form
        className="flex h-24 items-stretch rounded-xl bg-white shadow-xl"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="ex: Miami"
          className="w-full rounded-xl p-4 ring-0 focus:outline-none"
          ref={inputTerm}
        />
        <button className="ml-auto rounded-xl bg-gradient-to-br from-app-day-start to-app-day-end p-4 text-white">
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

      {data && !skip ? (
        <div className="relative -top-1 w-10/12 overflow-hidden rounded-b-xl">
          <SelectCity cities={data} emtpySearchTerm={clearResults} />
          <div className="pointer-events-none absolute top-0 h-2 w-full bg-gradient-to-b from-white" />
          <div className="pointer-events-none absolute bottom-0 h-2 w-full bg-gradient-to-t from-white" />
        </div>
      ) : null}
    </div>
  );
}

export default CitySearch;
