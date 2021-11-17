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
            <InputLabel id="exercise-label">Exercise</InputLabel>
            <Select
              // setExerciseSubmitted={props.setExerciseSubmitted}
              labelId="exercise-label"
              id="exercise-select"
              defaultValue={1}
              label="Exercise"
              onChange={props.setExerciseSubmitted}
            >
              <MenuItem value={1}>Walk</MenuItem>
              <MenuItem value={2}>Jog</MenuItem>
              <MenuItem value={3}>Run</MenuItem>
              {/* <MenuItem value={"Walk"}>Walk</MenuItem>
              <MenuItem value={"Jog"}>Jog</MenuItem>
              <MenuItem value={"Run"}>Run</MenuItem> */}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="duration-label">Duration</InputLabel>
            <Select
              // setDurationSubmitted={props.setDurationSubmitted}
              labelId="duration-label"
              id="duration-select"
              defaultValue={30}
              label="Duration"
              onChange={props.setDurationSubmitted}
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
