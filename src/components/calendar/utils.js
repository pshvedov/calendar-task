export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

export const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const GRID_ROWS = 6;

export function getNextMonthDate(date) {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() + 1);
  return newDate;
}

export function getPrevMonthDate(date) {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() - 1);
  return newDate;
}

export function getMonthName(month) {
  return MONTHS[month] || '';
}

// Date::getDay() returns 0 for Sunday, so convert it to 0 - Monday, 1 - Tuesday, ...
export function weekday(day) {
  return day === 0 ? 6 : day - 1;
}

export function getCalendarGrid(date) {
  const days = [];
  const current = getFirstMonthDay(date);
  const currentWeekday = weekday(current.getDay());
  if (currentWeekday > 0) {
    current.setDate(current.getDate() - currentWeekday);
  }
  for (let i = 0; i < 7 * GRID_ROWS; i++) {
    days.push({
      date: current.getDate(),
      month: MONTHS_SHORT[current.getMonth()],
      isCurrent: current.getMonth() === date.getMonth(),
      
    });
    current.setDate(current.getDate() + 1);
  }
  return days;
}

export function getFirstMonthDay(date) {
  const firstDay = new Date(date);
  firstDay.setDate(1);
  return firstDay;
}
