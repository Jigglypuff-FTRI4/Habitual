/**
 * ************************************
 *
 * @module Mood.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const Mood = (props) => {
  return (
    <Box sx={{ p: 2, border: "1px dashed blue" }}>
      <div id="mood-box">
        <div className="moodslider">
          <strong>How are you feeling today?</strong>
          <DiscreteSlider setMoodSubmitted={props.setMoodSubmitted} />
        </div>
        <div id="moodcomment">
          <MultilineTextFields
            setCommentSubmitted={props.setCommentSubmitted}
          />
        </div>
        <Button onClick={props.handleClick} varient="outlined">
          Submit
        </Button>
      </div>
    </Box>
  );
};

function valuetext(value) {
  return value;
}
function DiscreteSlider(props) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Mood"
        defaultValue={5}
        getAriaValueText={(value) => {
          props.setMoodSubmitted(value);
        }}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
      />
    </Box>
  );
}

function MultilineTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
          onChange={(e) => props.setCommentSubmitted(e.target.value)}
        />
      </div>
    </Box>
  );
}
// function BoxSx() {
//   return (
//     <Box
//       sx={{
//         width: 300,
//         height: 300,
//         backgroundColor: "primary.dark",
//         "&:hover": {
//           backgroundColor: "primary.main",
//           opacity: [0.9, 0.8, 0.7],
//         },
//       }}
//     />
//   );
// }

export default Mood;
