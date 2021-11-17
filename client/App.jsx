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

import React from "react";
import { useState, useCallback } from 'react';
import CalendarView from "./containers/CalendarView.jsx";
import { useTheme } from "@mui/material/styles";
import NavBar from "./common/NavBar.jsx";
import Home from "./containers/Home.jsx";

export default function App() {
  const theme = useTheme();
  theme.palette.mode = "dark";

  const [page, setPage] = useState("home");

  const onPageNav = useCallback((page) => {
    setPage(page);
  }, []);
  return (
    <div id="app">
      <NavBar setPage={onPageNav} />
      {page === 'home' && <Home />}
      {page === 'calendar' && <CalendarView />},
    </div>
  );
}
