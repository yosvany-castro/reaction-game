import "./App.css";
import { useState, useEffect, useRef } from "react";

function ReactionTest() {
  const [alreadyStarted, setAlreadyStarted] = useState(false);
  const time = useRef(0);
  const randomTime = useRef(0);
  const controller = useRef(null);
  const squareRef = useRef(null);
  const [result, setResult] = useState({
    status: false,
    response: "",
  });
  const initialClasses = alreadyStarted ? "square red" : "square red hidden";
  const resultText = useRef(null);
  console.log(squareRef.current);

  function changeColor(signal) {
    return new Promise((resolve) => {
      const timerId = setTimeout(() => {
        resolve("green");
      }, randomTime.current * 1000);

      signal?.addEventListener("abort", () => {
        clearTimeout(timerId);
        throw new Error("Promesa abortada");
      });
    });
  }

  const handleSquareClick = () => {
    const squareClasses = squareRef.current.className;
    console.log(squareClasses.split(" ").some((e) => e == "red"));
    if (
      controller.current &&
      squareClasses.split(" ").some((e) => e == "red")
    ) {
      controller.current.abort();
      setAlreadyStarted(false);
      setResult({
        ...result,
        response: "Has perdido",
      });
      return;
    }
    time.current = Date.now() - time.current;
    setAlreadyStarted(false);
    setResult({
      ...result,
      status: true,
      response: `Te tomo ${time.current} milisegundos`,
    });
  };

  useEffect(() => {
    if (alreadyStarted) {
      console.log("started");
      randomTime.current = Math.floor(Math.random() * 6) + 1;
      controller.current = new AbortController();
      console.log(squareRef.current);

      try {
        (async () => {
          const stepTwo = await changeColor(controller.current.signal);
          squareRef.current.setAttribute("class", `square ${stepTwo}`);
          time.current = Date.now();
          console.log(stepTwo);
          console.log(squareRef.current);
        })();
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [alreadyStarted]);

  useEffect(() => {
    if (!alreadyStarted) {
      squareRef.current.setAttribute("class", initialClasses);
    }
  }, [result, alreadyStarted]);

  return (
    <div className="container">
      <button
        type="button"
        onClick={() => {
          if (result) {
            setAlreadyStarted(true);
            setResult(false);
          } else {
            setAlreadyStarted(true);
          }
        }}
      >
        Star Game
      </button>
      <div
        ref={squareRef}
        className={initialClasses}
        onClick={() => handleSquareClick()}
      ></div>
      <p ref={resultText}>{result.response}</p>
    </div>
  );
}
export default ReactionTest;
