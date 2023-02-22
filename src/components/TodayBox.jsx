// Component
import TodayLine from "./TodayLine";

function TodayBox({ weather }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-app-day-start to-app-day-end shadow-app">
      <div className="max-h-72 overflow-scroll py-10 px-8 text-center text-white">
        {weather.hourly.map((hour, index) => (
          <TodayLine
            key={hour.dt}
            hour={hour}
            index={index}
            timezone={weather.timezone}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute top-0 h-10 w-full rounded-t-xl bg-gradient-to-b from-app-day-start" />
      <div className="pointer-events-none absolute bottom-0 h-10 w-full rounded-b-xl bg-gradient-to-t from-app-day-end" />
    </div>
  );
}

export default TodayBox;
