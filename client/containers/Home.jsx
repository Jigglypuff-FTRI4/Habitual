/**
 * ************************************
 *
 * @module Home.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { useCallback, useEffect, useState } from "react";
import Mood from "../components/Mood.jsx";
import Exercise from "../components/Exercise.jsx";

const Home = (props) => {
  //STATE//
  const [moodSubmitted, setMoodSubmitted] = useState(0);
  const [commentSubmitted, setCommentSubmitted] = useState("");
  const [submitComplete, setSubmitComplete] = useState(false);

  const [exerciseSubmitted, setExerciseSubmitted] = useState("");
  const [durationSubmitted, setDurationSubmitted] = useState("");
  const [exerciseSubmitComplete, setExerciseSubmitComplete] = useState(false);


  const handleClick = (e) => {
    console.log("fetch request will happen here");

    setSubmitComplete(true);
  };

  const handleExerciseClick = (e) => {
    console.log("new fetch here");
    setExerciseSubmitComplete(true);
  };

  if (submitComplete === false) {
    return (
      <div id="home-box">
        <Mood
          setMoodSubmitted={setMoodSubmitted}
          setCommentSubmitted={setCommentSubmitted}
          handleClick={handleClick}
        />
          <h3>How much exercise have you gotten today?</h3>
        <Exercise
          setExerciseSubmitted={setExerciseSubmitted}
          setDurationSubmitted={setDurationSubmitted}
          handleExerciseClick={handleExerciseClick}
        />
      </div>
    );
  } else {
    return (
      <div id="thanks">
        <div>
          <h1>Thank you for submitting!</h1>
        </div>
          <h3>You've already submitted your mood, but feel free to add more exercise!</h3>
        <Exercise
          setExerciseSubmitted={setExerciseSubmitted}
          setDurationSubmitted={setDurationSubmitted}
          handleExerciseClick={handleExerciseClick}
        />
      </div>
    );
  }
};



export default Home;