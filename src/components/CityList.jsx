import clsx from "clsx";

function CityList({ className }) {
  const classes = clsx(className);

  return (
    <div className={classes}>
      <p>This is CityList</p>
    </div>
  );
}

export default CityList;
