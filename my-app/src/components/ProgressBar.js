import "./ProgressBar.css";
import { useState, useEffect } from "react";

function ProgressBar(props) {
  const [filled, setFilled] = useState(0);
  useEffect(() => {
    setFilled(props.count * 10);
  }, [props.count]);

  return (
    <div id="myProgress">
      <div
        style={{
          width: `${filled}%`,
          height: "30px",
          backgroundColor: "green",
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
