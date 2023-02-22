import clsx from "clsx";
import dayjs from "dayjs";

function TodayLine({ hour, index, timezone }) {
  return (
    <div
      key={hour.dt + hour.humidity}
      className={clsx("relative flex h-6 items-center justify-center", {
        "py-6": index !== 0,
        "pt-10 pb-6": index === 0,
      })}
    >
      {index === 0 ? (
        <p className="absolute -top-1 font-semibold">Now</p>
      ) : null}
      <div
        className={clsx("rounded-full bg-white", {
          "h-2.5 w-2.5": index !== 0,
          "h-4 w-4": index === 0,
        })}
      />
      <div
        className={clsx(
          "absolute left-1/2  h-full w-[4px] -translate-x-1/2 transform bg-white",
          {
            "top-5": index !== 0,
            "top-9": index === 0,
          }
        )}
      />
      <p
        className={clsx("absolute transform", {
          "-translate-x-8 text-xl font-thin": index !== 0,
          "-translate-x-10 text-4xl font-semibold": index === 0,
        })}
      >
        {Math.round(hour.temp)}&deg;
      </p>
      {index !== 0 ? (
        <p className="absolute translate-x-10 transform font-thin">
          {dayjs.unix(hour.dt).tz(timezone).format("hh a")}
        </p>
      ) : null}
    </div>
  );
}

export default TodayLine;
