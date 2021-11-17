import React, { useCallback, useEffect, useState } from "react";
import Calendar from '../components/Calendar.jsx';

import '../styles/containers/CalendarView.scss'

//Dummy Data//
const calendarInfo = [
  { mood: 1, comment: 'test'},
  { mood: 2, comment: 'test'},
  { mood: 3, comment: 'test'},
  { mood: 4, comment: 'test'},
  { mood: 5, comment: 'test'},
  { mood: 6, comment: 'test'},
  { mood: 7, comment: 'test'},
  { mood: 8, comment: 'test'},
  { mood: 9, comment: 'test'},
  { mood: 10, comment: 'test'},
  { mood: 1, comment: 'test'},
  { mood: 2, comment: 'test'},
  { mood: 3, comment: 'test'},
  { mood: 4, comment: 'test'},
  { mood: 5, comment: 'test'},
  { mood: undefined, comment: 'test'},
  { mood: 7, comment: 'test'},
  { mood: 8, comment: 'test'},
  { mood: 9, comment: 'test'},
  { mood: undefined, comment: 'test'},
  { mood: 10, comment: 'test'},
];


export default function CalendarView (props) {
  //STATE//
  const [calendarData, setCalendarData] = useState(calendarInfo)
  console.log('calendarData:', calendarData);


  return (
      <div id='calendar-view'>
      <Calendar
        calendarData={calendarData}
      />
      
      </div>
  )

};
