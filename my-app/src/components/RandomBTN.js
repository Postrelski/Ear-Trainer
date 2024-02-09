import "./RandomBTN.css";

function RandomBTN(props) {
  // Should I use a "dice" icon for this?
  return (
    <div>
      <p>Click here for new interval.</p>
      <button className="random_btn" onClick={props.randomizeHandler}>
        Next
      </button>
    </div>
  );
}

export default RandomBTN;
