import React, { useCallback, useEffect, useState } from 'react';
import buildCalendar from '../components/Calendar.jsx';
import moment from 'moment';
import '../styles/containers/CalendarView.scss';
import dayStyles from './styles.js'

export default function Calender() {
  const [calendarArray, setCalendarArray] = useState([]);
  const [value, setValue] = useState(moment()); //moment is default state

  useEffect(() => {
    setCalendarArray(buildCalendar(value));
  }, [value]); //if we select a day in the next month, this will rerender state


  function currMonthName() {
    return value.format('MMM'); //format is a method from momemnt
  }

  function currYear() {
    return value.format('YYYY');
  }

  const calendar = calendarArray.map((week) => (
        week.map((day) => (
          <div className='day' onClick={() => setValue(day)}>
            <div className={dayStyles(day, value)}>
              {day.format('D')}
            </div>
          </div>
        ))
  ));

  function prevMonth() {
    return value.clone().subtract(1, 'month')
  }

  function nextMonth() {
    return value.clone().add(1, 'month')
  }
          
  return (
  <div className='calendar'>
    <div className='header'>
      <div className='previous' onClick={() => setValue(prevMonth())}>
        {String.fromCharCode(171)}
      </div>
      <div className='current'>{currMonthName()} {currYear()} </div>
      <div className='next' onClick={() => setValue(nextMonth())}>{String.fromCharCode(187)}</div>
    </div>
    <div className='body'>
      <div className='day-names'>
        {
        ['s', 'm', 't', 'w', 't', 'f', 's'].map(d => <div className='week'>{d}</div>)
        }
      </div>
      {calendar}
      </div>;
    </div>
)}

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
