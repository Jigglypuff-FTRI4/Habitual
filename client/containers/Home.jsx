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

const Home = (props) => {
  //STATE//
  const [moodSubmitted, setMoodSubmitted] = useState(0);
  const [commentSubmitted, setCommentSubmitted] = useState("");
  const [submitComplete, setSubmitComplete] = useState(false);

  const handleClick = (e) => {
    console.log("fetch request will happen here");
    //if res === 200:
    setSubmitComplete(true);
  };

  if (submitComplete === false) {
    return (
      <div id="home-box">
        <h1> In Home page</h1>
        {/* { console.log('test')} */}
        <Mood
          setMoodSubmitted={setMoodSubmitted}
          setCommentSubmitted={setCommentSubmitted}
          handleClick={handleClick}
        />
      </div>
    );
  } else {
    return (
      <div id="thanks">
        <h1>Thank you for submitting!</h1>
      </div>
    );
  }
};

export default Home;
