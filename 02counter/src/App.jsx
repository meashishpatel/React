import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 5;

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("Clicked", counter);
    // counter = counter + 1; // Will not work, because react controls the UI upgradation
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter == 0) {
      setCounter((counter = 0));
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter} </button>
      <footer>Footer: {counter}</footer>
    </>
  );
}

export default App;
