/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component } from "react";
import { render } from "react-dom";
import Home from "./containers/Home.jsx";
import CalendarView from './containers/CalendarView.jsx'

export default function App() {
  return (
    <div>
      <h1>this is the App component</h1>
      <Home />
      <CalendarView />
    </div>
  );
}
