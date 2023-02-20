import dayjs from "dayjs";

// Components
import { Tab } from "@headlessui/react";

function TabSnapshotPanel({ day, timezone }) {
  const { weather } = day;

  return (
    <Tab.Panel className="mb-4 flex justify-between rounded-xl bg-white bg-opacity-10 p-5 text-sm shadow-lg">
      <div>
        <h4 className="text-2xl">
          {dayjs.unix(day.dt).tz(timezone).format("ddd, DD MMM")}
        </h4>
        <img className="h-48 w-48" src={`/icons/${weather[0].icon}.svg`} />
      </div>
      <div className="flex flex-col space-y-5">
        <h4 className="text-3xl font-semibold">
          {Math.round(day.temp.day)}&deg;
        </h4>
        <p>{weather[0].main}</p>
        <p>
          The high will be {Math.round(day.temp.max)}&deg;, the low will be{" "}
          {Math.round(day.temp.min)}&deg;.
        </p>
        <div className="mt-2">
          <p>
            <span>Humidity: {day.humidity}%</span>
            <br />
            <span>UV: 3</span>
            <br />
            <span>Dew point: {Math.round(day.dew_point)}&deg;C</span>
          </p>
        </div>
      </div>
    </Tab.Panel>
  );
}

export default TabSnapshotPanel;
