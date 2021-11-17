import React, { useCallback, useEffect, useState } from 'react';
import Calendar from '../components/Calendar.jsx';
import moment from 'moment';
import '../styles/containers/CalendarView.scss';

export default function Calender() {
  const { calendarArray, setCalendarArray } = useState([]);
  const { value, setValue } = useState(moment());

  //first day of the calendar month
  const startDay = value.clone().startOf('month').startOf('week');
  //last calendar day of the calendar month
  const endDay = value.clone().endOf('month').endOf('week');
  //set iterator day 1 day before the calendar month
  const day = startDay.clone().subtract(1, 'day');
  
  useEffect(() => {
    const arrayPlaceholder = [];
    //isBefore is a method from moment
    while (day.isBefore(endDay, 'day')) {
      arrayPlaceholder.push(
        //newArray with 7 values, map over the 7 zeros
        Array(7)
          .fill(0)
          .map(() => day.add(1, 'day').clone())
      );
    }

    setCalendarArray(arrayPlaceholder);
  }, [value]); //if we select a day in the next month, this will rerender state


  const calendar = calendarArray.map((week) => (
    <div className='calendar'>
      {week.map((day) => (
        <div className='day'>{day.format('D')}</div>
      ))}
    </div>
  ));

  return <div>{calendar}</div>;
}

// //Dummy Data//
// const calendarInfo = [
//   { mood: 1, comment: 'test'},
//   { mood: 2, comment: 'test'},
//   { mood: 3, comment: 'test'},
//   { mood: 4, comment: 'test'},
//   { mood: 5, comment: 'test'},
//   { mood: 6, comment: 'test'},
//   { mood: 7, comment: 'test'},
//   { mood: 8, comment: 'test'},
//   { mood: 9, comment: 'test'},
//   { mood: 10, comment: 'test'},
//   { mood: 1, comment: 'test'},
//   { mood: 2, comment: 'test'},
//   { mood: 3, comment: 'test'},
//   { mood: 4, comment: 'test'},
//   { mood: 5, comment: 'test'},
//   { mood: undefined, comment: 'test'},
//   { mood: 7, comment: 'test'},
//   { mood: 8, comment: 'test'},
//   { mood: 9, comment: 'test'},
//   { mood: undefined, comment: 'test'},
//   { mood: 10, comment: 'test'},
// ];

// export default function CalendarView (props) {
//   //STATE//
//   const [calendarData, setCalendarData] = useState(calendarInfo)
//   console.log('calendarData:', calendarData);

//   return (
//       <div id='calendar-view'>
//       <Calendar
//         calendarData={calendarData}
//       />

//       </div>
//   )

// };
