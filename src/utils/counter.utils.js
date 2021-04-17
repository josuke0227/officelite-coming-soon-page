import { utcInitialDate } from "../constants/counter.constants";

export const getLanchDate = () => {
  const {
    year,
    month,
    day,
    hours,
    seconds,
    milliseconds,
    minutes,
  } = utcInitialDate;

  let launchDateMillisec = new Date(
    year,
    month,
    day,
    hours,
    minutes,
    seconds,
    milliseconds
  ).getTime();

  const sevenDaysByMillisec = 604800000;

  const now = new Date().getTime();
  let launchDate = launchDateMillisec + sevenDaysByMillisec;

  let distance;
  if (launchDate - now < 0) {
    while (launchDate - now < sevenDaysByMillisec / 2) {
      launchDate += sevenDaysByMillisec;
    }
    distance = launchDate - now;
  }
  distance = launchDate - now;

  return { launchDate, distance };
};

export const dateFormatter = (distance) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);

  const dateArr = [days, hours, minutes, seconds];

  return dateArr.map((num) => (num.toString().length === 1 ? "0" + num : num));
};

export const updateLaunchDate = (launchDate) => {
  const [, month, day, year] = new Date(launchDate).toString().split(" ");
  let formattedDay = day.startsWith("0") ? day.substr(1) : day;

  return `${formattedDay} ${month} ${year}`;
};
