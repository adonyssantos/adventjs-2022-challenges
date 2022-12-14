type Year = number;
type Hours = number;
type Day = number;
type Holiday = `${number}/${number}`;
type Holidays = Array<Holiday>;

function countHours(year: Year, holidays: Holidays) {
  const enum Days {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
  }

  let compensationTime: Hours = 0;

  holidays.forEach((holiday: Holiday) => {
    const weekDay: Day = new Date(`${year}/${holiday}`).getDay();
    const isWeekend = weekDay === Days.Sunday || weekDay === Days.Saturday;

    !isWeekend && (compensationTime += 2);
  });

  return compensationTime;
}
