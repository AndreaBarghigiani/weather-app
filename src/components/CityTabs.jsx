import clsx from "clsx";

// Components
import { Tab } from "@headlessui/react";
import TabSnapshotPanel from "./TabSnapshotPanel";

// Redux
import { useSelector } from "react-redux";
import { useGetWeatherQuery } from "../store/";

// Date
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

function CityTabs({ className }) {
  const city = useSelector((state) =>
    state.cities.filter((city) => city.current).pop()
  );
  const {
    data: weather,
    error,
    isLoading,
    isSuccess,
  } = useGetWeatherQuery(city);

  const classes = clsx(className);
  const tabClasses = (selected) =>
    clsx("p-4 text-2xl font-semibold rounded-t-xl border-0 outline-0 ring-0", {
      "bg-white text-app-500 shadow-tab": !selected,
      "bg-blue-500 text-white shadow-tab-active": selected,
    });
  const tabDotsClasses = (selected) =>
    clsx("h-2 w-2 rounded-full border-0 outline-0 ring-0", {
      "bg-blue-300": !selected,
      "bg-white": selected,
    });
  return (
    <div className={classes}>
      <Tab.Group>
        <Tab.List>
          <Tab className={({ selected }) => tabClasses(selected)}>
            This week
          </Tab>
          <Tab className={({ selected }) => tabClasses(selected)}>
            This month
          </Tab>
        </Tab.List>
        <Tab.Panels className="relative rounded-xl bg-blue-500 p-6 text-white">
          <Tab.Panel>
            {isSuccess ? (
              <Tab.Group>
                <Tab.Panels>
                  {weather.daily.map((day) => (
                    <TabSnapshotPanel
                      key={day.dt}
                      day={day}
                      timezone={weather.timezone}
                    />
                  ))}
                </Tab.Panels>
                <Tab.List className="flex justify-center space-x-2">
                  {weather.daily.map((day) => (
                    <Tab
                      className={({ selected }) => tabDotsClasses(selected)}
                      key={day.dt}
                    />
                  ))}
                </Tab.List>
              </Tab.Group>
            ) : null}
          </Tab.Panel>
          <Tab.Panel>
            No montly data forecast available from OpenWeather, at least{" "}
            <a
              className="underline"
              target="_blank"
              href="https://openweathermap.org/full-price#current"
            >
              for free.
            </a>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default CityTabs;
