import clsx from "clsx";

function CityToday({ className }) {
  const classes = clsx(className);

  return (
    <div className={classes}>
      <p>This is CityToday</p>
    </div>
  );
}

export default CityToday;
