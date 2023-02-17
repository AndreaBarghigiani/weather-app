import clsx from "clsx";

function CityTemp({ className, weather }) {
  const { temp } = weather.current;
  const { icon } = weather.current.weather[0];
  const classes = clsx(
    className,
    "bg-gradient-to-tl from-blue-500 to-blue-600"
  );

  return (
    <div className={classes}>
      <p>{temp}</p>
      <img className="h-32 w-32" src={`/icons/${icon}.svg`} />
    </div>
  );
}

export default CityTemp;
