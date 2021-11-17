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
import NavBar from "./common/NavBar.jsx";
import Home from "./containers/Home.jsx";
import { useTheme } from '@mui/material/styles'

export default function App() {
  const theme = useTheme();
  theme.palette.mode = 'dark';
  return (
    <div id="app">
      <NavBar />
      {/* <h1>this is the App component</h1> */}
      <Home />
    </div>
  );
}
