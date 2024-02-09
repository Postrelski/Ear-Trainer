import { useState } from "react";
import "./App.css";
import {
  toneArrayAscending,
  toneArrayDescending,
} from "./components/audioData";

import ChoicesBTNS from "./components/ChoicesBTNS";
import PlayBTN from "./components/PlayBTN";
import RandomBTN from "./components/RandomBTN";
import SelectorBTN from "./components/SelectorBTN";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [rndNumber, SetRndNumber] = useState(
    Math.floor(Math.floor(Math.random() * 7))
  );
  const [count, SetCount] = useState(0);
  const [arrayChooser, setArrayChooser] = useState("ascending");
  const arraySelector =
    arrayChooser == "ascending" ? toneArrayAscending : toneArrayDescending;

  // randomizes the next option
  function randomizeHandler() {
    SetRndNumber(Math.floor(Math.random() * 7));
    SetCount((prevCount) => prevCount + 1);
  }

  function fetchFromChild(input) {
    setArrayChooser(input);
  }

  // triggers the audio recroding
  const playAudio = () => {
    const audio = arraySelector[rndNumber].address;
    audio.currentTime = 0;
    audio.play();
  };

  // reset the count, and restart the game
  if (count > 10) {
    SetCount(0);
  }

  return (
    <div className="main_section">
      <ProgressBar count={count} />
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
