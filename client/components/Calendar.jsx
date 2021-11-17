import React from 'react';
import DateBox from './DateBox.jsx';

export default function buildCalendar(value) {
  //first day of the calendar month
  const startDay = value.clone().startOf('month').startOf('week');
  //last calendar day of the calendar month
  const endDay = value.clone().endOf('month').endOf('week');

  //set iterator day 1 day before the calendar month
  const day = startDay.clone().subtract(1, 'day');

  const arrayPlaceholder = [];
  //isBefore is a method from moment
  while (day.isBefore(endDay, 'day')) {
    arrayPlaceholder.push(
      //newArray with 7 values, map over the 7 zeros
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone()) //clone gives new instance of the next day
    );
  }

  return arrayPlaceholder;
}

// const moodColor = (moodVal) => {
//   let color;
//   if (moodVal === undefined) color = 'gray';
//   if (moodVal === 1) color = 'rgb(255, 51, 0)';
//   if (moodVal === 2) color = 'rgb(255, 102, 0)';
//   if (moodVal === 3) color = 'rgb(255, 153, 0)';
//   if (moodVal === 4) color = 'rgb(255, 204, 0)';
//   if (moodVal === 5) color = 'rgb(255, 255, 0)';
//   if (moodVal === 6) color = 'rgb(204, 255, 0)';
//   if (moodVal === 7) color = 'rgb(153, 255, 0)';
//   if (moodVal === 8) color = 'rgb(102, 255, 0)';
//   if (moodVal === 9) color = 'rgb(51, 255, 0)';
//   if (moodVal === 10) color = 'rgb(0, 255, 0)';
//   return color;
// };

// export default function Calendar({ calendarData }) {
//     console.log('Calendar calendarData: ', calendarData);
//     const row1 = [];
//     const row2 = [];
//     const row3 = [];
//     for(let i = 0; i < 7; i++) {
//         const color = moodColor(calendarData[i].mood);
//         row1.push(<DateBox key={`row1box${i}`} color={color}/>)
//     }
//     for(let i = 7; i < 14; i++) {
//         const color = moodColor(calendarData[i].mood);
//         row2.push(<DateBox key={`row1box${i}`} color={color}/>)
//     }
//     for(let i = 14; i < 21; i++) {
//         const color = moodColor(calendarData[i].mood);
//         row3.push(<DateBox key={`row1box${i}`} color={color}/>)
//     }

//     return(
//         <div id='calendar'>
//         <div>{row1}</div>
//         <div>{row2}</div>
//         <div>{row3}</div>
//         </div>
//     )

// };
