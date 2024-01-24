import { useState } from "react";
import "./App.css";

// aescening options
import Major_2nd from "./piano_Intervals/Ascending/Major_2nd.wav";
import Major_3rd from "./piano_Intervals/Ascending/Major_3rd.wav";
import Perfect_4th from "./piano_Intervals/Ascending/Perfect_4th.wav";
import Perfect_5th from "./piano_Intervals/Ascending/Perfect_5th.wav";
import Major_6th from "./piano_Intervals/Ascending/Major_6th.wav";
import Major_7th from "./piano_Intervals/Ascending/Major_7th.wav";
import Octave from "./piano_Intervals/Ascending/Octave.wav";

// descending options
import Major_2nd_Desc from "./piano_Intervals/Descending/Major_2nd_Desc.wav";
import Major_3rd_Desc from "./piano_Intervals/Descending/Major_3rd_Desc.wav";
import Perfect_4th_Desc from "./piano_Intervals/Descending/Perfect_4th_Desc.wav";
import Perfect_5th_Desc from "./piano_Intervals/Descending/Perfect_5th_Desc.wav";
import Major_6th_Desc from "./piano_Intervals/Descending/Major_6th_Desc.wav";
import Major_7th_Desc from "./piano_Intervals/Descending/Major_7th_Desc.wav";
import Octave_Desc from "./piano_Intervals/Descending/Octave_Desc.wav";

// components
import ChoicesBTNS from "./components/ChoicesBTNS";
import PlayBTN from "./components/PlayBTN";
import RandomBTN from "./components/RandomBTN";
import SelectorBTN from "./components/SelectorBTN";

// audio objects
const toneArrayAscending = [
  { address: new Audio(Major_2nd), tone: "Major 2nd" },
  { address: new Audio(Major_3rd), tone: "Major 3rd" },
  { address: new Audio(Perfect_4th), tone: "Perfect 4th" },
  { address: new Audio(Perfect_5th), tone: "Perfect 5th" },
  { address: new Audio(Major_6th), tone: "Major 6th" },
  { address: new Audio(Major_7th), tone: "Major 7th" },
  { address: new Audio(Octave), tone: "Octave" },
];

const toneArrayDescending = [
  { address: new Audio(Major_2nd_Desc), tone: "Major 2nd" },
  { address: new Audio(Major_3rd_Desc), tone: "Major 3rd" },
  { address: new Audio(Perfect_4th_Desc), tone: "Perfect 4th" },
  { address: new Audio(Perfect_5th_Desc), tone: "Perfect 5th" },
  { address: new Audio(Major_6th_Desc), tone: "Major 6th" },
  { address: new Audio(Major_7th_Desc), tone: "Major 7th" },
  { address: new Audio(Octave_Desc), tone: "Octave" },
];

// ----------------------------------------------------
// component begins
// ----------------------------------------------------

function App() {
  const [rndNumber, SetRndNumber] = useState(
    Math.floor(Math.floor(Math.random() * 7))
  );
  const [count, SetCount] = useState(0);
  const [arrayChooser, setArrayChooser] = useState("ascending");
  const arraySelector =
    arrayChooser == "ascending" ? toneArrayAscending : toneArrayDescending;

  function randomizeHandler() {
    SetRndNumber(Math.floor(Math.random() * 7));
    SetCount((prevCount) => prevCount + 1);
  }

  function fetchFromChild(input) {
    setArrayChooser(input);
  }

  const playAudio = () => {
    const audio = arraySelector[rndNumber].address;
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="main_section">
      <SelectorBTN fetchFromChild={fetchFromChild} />
      <RandomBTN randomizeHandler={randomizeHandler} />
      <PlayBTN play_audio={playAudio} />
      <ChoicesBTNS
        correct_answer={arraySelector[rndNumber].tone}
        count={count}
        fetchFromChild={fetchFromChild}
      />
    </div>
  );
}

export default App;
