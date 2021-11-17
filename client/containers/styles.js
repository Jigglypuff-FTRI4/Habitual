function isSelected(day, value) {
  return value.isSame(day, 'day') //second argument is the interval 
}

// function beforeToday(day) {
//   return day.isBefore(new Date(), 'day') 
// }

//function tells us if it is today
function isToday(day) { 
  return day.isSame(new Date(), 'day')
}

//possibly selects the class name based on the checks below 
export default function dayStyles(day, value) {
  // if (beforeToday(day)) return 'before';
  if (isSelected(day, value)) return 'selected';
  if (isToday(day)) return 'today';
  return '';
}