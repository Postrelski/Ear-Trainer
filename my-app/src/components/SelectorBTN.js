import { useState } from "react";
import "./SelectorBTN.css";

function SelectorBTN(props) {
  function patternTypeHandler(e) {
    props.fetchFromChild(e.target.value);
  }

  return (
    <div>
      <p className="selectorTitle">Choose Pattern Type</p>
      <select onChange={patternTypeHandler} name="pets" id="pet-select">
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
}

export default SelectorBTN;
