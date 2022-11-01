import React, { useState } from "react";

function Coolbutton(props) {
  const [count, setCount] = useState(0);
  const [commentsHistory, setcommentsHistory] = useState([""]);

  function clickListener() {
    setCount(count + 1);
    setcommentsHistory([...commentsHistory, props.Comment]);
    console.log("Comment is:", props.Comment);
  }

  return (
    <div>
      <span>{props.buttonName ? props.buttonName : "Button none"}</span>
      <br />
      <input
        className="Coolbutton"
        type="button"
        onClick={clickListener}
        value={props.text ? props.text : "Again Click"}
        class="block p-1 w-full bg-sky-500 hover:bg-sky-700  rounded-lg border border-orange-300"
      />
      <h1> {count} </h1>
      <div>
        {commentsHistory.map((el) => (
          <div>{el}</div>
        ))}
      </div>
    </div>
  );
}
export default Coolbutton;
