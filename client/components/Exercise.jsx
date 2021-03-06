/**
 * ************************************
 *
 * @module Exercise.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const Exercise = (props) => {
  return (
    <Box sx={{ p: 2, border: "1px dashed blue" }}>
      <div id="exercise-box">
        {/* <strong>Add Exercise</strong> */}
        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            {/* { props.setExerciseSubmitted("Jog") } */}
            <InputLabel id="exercise-label">Exercise</InputLabel>
            <Select
              labelId="exercise-label"
              id="exercise-select"
              // defaultValue={"Walk"}
              label="Exercise"
              onClick={(e) => props.setExerciseSubmitted(e.target.innerText)}
            >
              <MenuItem value={"Walk"}>Walk</MenuItem>
              <MenuItem value={"Jog"}>Jog</MenuItem>
              <MenuItem value={"Run"}>Run</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="duration-label">Duration</InputLabel>
            <Select
              // setDurationSubmitted={props.setDurationSubmitted}
              labelId="duration-label"
              id="duration-select"
              defaultValue={props.setDurationSubmitted30}
              label="Duration"
              onChange={(e) => props.setDurationSubmitted(e.target.value)}
            >
              <MenuItem value={30}>30 Minutes</MenuItem>
              <MenuItem value={60}>1 Hour</MenuItem>
              <MenuItem value={90}>90 Minutes</MenuItem>
              <MenuItem value={120}>2 Hours</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <Button onClick={props.handleExerciseClick} varient="outlined">
        Submit
      </Button>
    </Box>
  );
};

export default Exercise;
