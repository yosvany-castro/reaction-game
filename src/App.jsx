import "./App.css";
import { useState } from "react";

function ReactionTest() {
  const [start, setStart] = useState(true);
  const [time, setTime] = useState("");
  const [color, setColor] = useState("game");

  function handleGame() {
    setStart(!start);
    const tiempo = Math.floor(Math.random() * 6) + 1;
    const firstTime = Date.now();
    setTime(firstTime);
    setTimeout(() => setColor("end"), tiempo * 1000);
  }

  function handleResult() {
    setStart(!start);
    const finish = Date.now();
    setColor("game");
    setTime((time - finish) / 1000);
  }

  function result() {}

  return (
    <div className="container">
      <input
        hidden={!start}
        onClick={(e) => handleGame()}
        type="button"
        className="button"
        value="Start Game"
      />
      <input
        hidden={start}
        onClick={(e) => handleResult()}
        type="button"
        className={color}
      />
      <p hidden={!start} className="result">
        {" "}
        Te amo
      </p>
    </div>
  );
}

export default ReactionTest;
