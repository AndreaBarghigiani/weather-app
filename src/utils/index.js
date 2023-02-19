import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export function isDayLight(current, rise, set) {
  const riseHour = dayjs.unix(rise).hour();
  const setHour = dayjs.unix(set).hour();
  const curHour = dayjs(current).hour();

  return curHour >= riseHour && curHour <= setHour;
}
