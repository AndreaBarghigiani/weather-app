// Component
import TodayLine from "./TodayLine";

function TodayBox({ weather }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-blue-500">
      <div className="max-h-72 overflow-scroll py-10 px-8 text-center text-white">
        {weather.hourly.map((hour, index) => (
          <TodayLine key={hour.dt} hour={hour} index={index} />
        ))}
      </div>
      <div className="pointer-events-none absolute top-0 h-10 w-full rounded-t-xl bg-gradient-to-b from-blue-500 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 h-10 w-full rounded-b-xl bg-gradient-to-t from-blue-500 to-transparent" />
    </div>
  );
}

export default TodayBox;
