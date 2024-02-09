// aescening options
import Major_2nd from "../piano_Intervals/Ascending/Major_2nd.wav";
import Major_3rd from "../piano_Intervals/Ascending/Major_3rd.wav";
import Perfect_4th from "../piano_Intervals/Ascending/Perfect_4th.wav";
import Perfect_5th from "../piano_Intervals/Ascending/Perfect_5th.wav";
import Major_6th from "../piano_Intervals/Ascending/Major_6th.wav";
import Major_7th from "../piano_Intervals/Ascending/Major_7th.wav";
import Octave from "../piano_Intervals/Ascending/Octave.wav";

// descending options
import Major_2nd_Desc from "../piano_Intervals/Descending/Major_2nd_Desc.wav";
import Major_3rd_Desc from "../piano_Intervals/Descending/Major_3rd_Desc.wav";
import Perfect_4th_Desc from "../piano_Intervals/Descending/Perfect_4th_Desc.wav";
import Perfect_5th_Desc from "../piano_Intervals/Descending/Perfect_5th_Desc.wav";
import Major_6th_Desc from "../piano_Intervals/Descending/Major_6th_Desc.wav";
import Major_7th_Desc from "../piano_Intervals/Descending/Major_7th_Desc.wav";
import Octave_Desc from "../piano_Intervals/Descending/Octave_Desc.wav";

// audio objects
export const toneArrayAscending = [
  { address: new Audio(Major_2nd), tone: "Major 2nd" },
  { address: new Audio(Major_3rd), tone: "Major 3rd" },
  { address: new Audio(Perfect_4th), tone: "Perfect 4th" },
  { address: new Audio(Perfect_5th), tone: "Perfect 5th" },
  { address: new Audio(Major_6th), tone: "Major 6th" },
  { address: new Audio(Major_7th), tone: "Major 7th" },
  { address: new Audio(Octave), tone: "Octave" },
];

export const toneArrayDescending = [
  { address: new Audio(Major_2nd_Desc), tone: "Major 2nd" },
  { address: new Audio(Major_3rd_Desc), tone: "Major 3rd" },
  { address: new Audio(Perfect_4th_Desc), tone: "Perfect 4th" },
  { address: new Audio(Perfect_5th_Desc), tone: "Perfect 5th" },
  { address: new Audio(Major_6th_Desc), tone: "Major 6th" },
  { address: new Audio(Major_7th_Desc), tone: "Major 7th" },
  { address: new Audio(Octave_Desc), tone: "Octave" },
];
