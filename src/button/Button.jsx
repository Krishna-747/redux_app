import React, { useState } from "react";
import styles from "./Buttonstyles.module.css";

function Button({ btn_val }) {
  const [state, setState] = useState(0);
  const [value, setValue] = useState("");

  const [ digit, setDigit ] = useState({
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      operation: { add: '+', subtract: '-', multiply: 'X', equals: '=' }
  })

  const txtbutton = (num, add) => {
    setState(state + num + add);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const calButton = (e) => {
    const clickedvalues = e.target.innerHTML
    

  }

  const valButton = (e) => {
    console.log(e.target.innerHTML)
  }

  return (
    <>
      <input
        data-testid="input_val"
        type="text"
        onChange={handleChange}
        value={value}
      />
      <div data-testid="stateid">{state}</div>
      <button
        data-testid="button"
        onClick={() => txtbutton(10, 20)}
        className={styles.btnstyle}
      >
        So {btn_val}
      </button>
      <button>Added button</button>
      {
          digit.arr.map((elm, key) => <button onClick={valButton} key={key}>
              {elm}
          </button>)
      }
      <button onClick={calButton}>{digit.operation.add}</button>
      <button onClick={calButton}>{digit.operation.subtract}</button>
      <button onClick={calButton}>{digit.operation.multiply}</button>
      <button onClick={calButton}>{digit.operation.equals}</button>
    </>
  );
}

export default Button;
