import clsx from "clsx";
import dayjs from "dayjs";

function TodayLine({ hour, index, timezone }) {
  // const classes = clsx()
  return (
    <div
      key={hour.dt + hour.humidity}
      className="relative flex h-6 items-center justify-center py-6"
    >
      {index === 0 ? <p className="absolute -top-4">Now</p> : null}
      <div
        className={clsx("rounded-full bg-white", {
          "h-2.5 w-2.5": index !== 0,
          "h-3.5 w-3.5": index === 0,
        })}
      />
      <div
        className={clsx(
          "absolute left-1/2  h-full w-px -translate-x-1/2 transform bg-white",
          {
            "top-5": index !== 0,
            "top-6": index === 0,
          }
        )}
      />
      <p
        className={clsx("absolute transform", {
          "-translate-x-8 text-xl font-thin": index !== 0,
          "-translate-x-10 text-3xl font-medium": index === 0,
        })}
      >
        {Math.round(hour.temp)}&deg;
      </p>
      <p
        className={clsx("absolute translate-x-10 transform", {
          "font-thin": index !== 0,
          "font-medium": index === 0,
        })}
      >
        {dayjs.unix(hour.dt).tz(timezone).format("hh a")}
      </p>
    </div>
  );
}

export default TodayLine;
