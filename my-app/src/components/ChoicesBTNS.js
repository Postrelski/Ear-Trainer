import "./Choices.css";
import React, { useState, useEffect } from "react";

const intervals = [
  "Major 2nd",
  "Major 3rd",
  "Perfect 4th",
  "Perfect 5th",
  "Major 6th",
  "Major 7th",
  "Octave",
];

function ChoicesBTNS(props) {
  const [classesArray, setClassesArray] = useState(
    Array(intervals.length).fill("interval_btns")
  );
  const [answers, setAnswers] = useState(Array(10).fill(false));
  const [firstAttempt, setFirstAttempt] = useState(true);
  useEffect(() => {
    setClassesArray(Array(intervals.length).fill("interval_btns"));
    setFirstAttempt(true);
  }, [props.count, props.fetchFromChild]);

  function answerChecker(event, index) {
    // finds the interval that was clicked and makes shallow copy of array
    const selectedInterval = intervals[index];
    const updatedClassesArray = [...classesArray];

    // updates the index of the classesArray that refers to the button that was clicked
    if (props.correct_answer === selectedInterval) {
      updatedClassesArray[index] = "interval_btns green";
      if (firstAttempt == true) {
        answers[props.count] = true;
        setFirstAttempt(false);
      }
    } else {
      updatedClassesArray[index] = "interval_btns red";
      if (firstAttempt == true) {
        answers[props.count] = false;
        setFirstAttempt(false);
      }
    }

    // updates the original array and reload component
    console.log(answers);
    setClassesArray(updatedClassesArray);
  }

  // alert the score in the console...
  if (props.count == 10) {
    let num = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] == true) num++;
    }
    const total = (num / 10) * 100;
    console.log("Congrats, youre score is: ", total, "%");
  }

  return (
    <div>
      <p>Make a choice.</p>
      <div>
        {intervals.map((choice, index) => (
          <button
            key={index}
            onClick={(event) => answerChecker(event, index)}
            className={classesArray[index]}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChoicesBTNS;
