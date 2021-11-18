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

import React, { useCallback, useEffect, useState } from 'react';
import Mood from '../components/Mood.jsx';
import Exercise from '../components/Exercise.jsx';
import formattedDate from '../common/date.js';

import '../styles/containers/Home.scss';

const Home = (props) => {
  //STATE//
  const [moodSubmitted, setMoodSubmitted] = useState(0);
  const [commentSubmitted, setCommentSubmitted] = useState('');
  const [submitComplete, setSubmitComplete] = useState(false);

  const [exerciseSubmitted, setExerciseSubmitted] = useState('');
  const [durationSubmitted, setDurationSubmitted] = useState('');
  const [exerciseSubmitComplete, setExerciseSubmitComplete] = useState(false);

  // Generates current date
  const currentDate = formattedDate();

  useEffect(() => {
    fetch(`/home/${currentDate}/2`)
      .then((data) => data.json())
      .then((data) => {
        setSubmitComplete(data);
      });
  }, [moodSubmitted]);

  const handleClick = (e) => {
    console.log('mood request');
    fetch('/home', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: currentDate,
        mood: moodSubmitted,
        comment: commentSubmitted,
        user_id: 2,
      }),
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
  };

  const handleExerciseClick = (e) => {
    console.log('exercise request');
    fetch('/home/exercise', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: currentDate,
        type: exerciseSubmitted,
        duration: durationSubmitted,
        user_id: 2,
      }),
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
  };

  if (submitComplete === false) {
    return (
      <div id='home-box'>
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
      <div>
        <div id='thanks'>
          <div>
            <h1>Thank you for submitting!</h1>
          </div>
          <h3>
            You've already submitted your mood, but feel free to add more
            exercise!
          </h3>
        </div>
        <div>
          <Exercise
            setExerciseSubmitted={setExerciseSubmitted}
            setDurationSubmitted={setDurationSubmitted}
            handleExerciseClick={handleExerciseClick}
          />
        </div>
      </div>
    );
  }
};

export default Home;
