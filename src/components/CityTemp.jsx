import clsx from "clsx";

function CityTemp({ className, weather }) {
  const { temp } = weather.current;
  const { icon } = weather.current.weather[0];
  const classes = clsx(
    className,
    "bg-gradient-to-tl from-blue-500 to-blue-600 pt-6 rounded-r-xl rouded-b-xl shadow-xl"
  );

  return (
    <div className={classes}>
      <p className="text-center text-4xl font-bold text-white">
        {Math.round(temp)}&deg;
      </p>
      <img className="h-24 w-24" src={`/icons/${icon}.svg`} />
    </div>
  );
}

export default CityTemp;
