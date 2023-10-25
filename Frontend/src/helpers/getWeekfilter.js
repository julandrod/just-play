import { formatDate } from ".";

const getWeekFilter = (date) => {
  const day = 24 * 60 * 60 * 1000;

  let actualWeek = [];

  for (let i = 1; i <= 7; i++) {
    actualWeek.push(formatDate(new Date(date.getTime() + day * i)));
  }

  return actualWeek;
};

export default getWeekFilter;
