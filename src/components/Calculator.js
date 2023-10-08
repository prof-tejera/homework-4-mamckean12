import { useState } from 'react';
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

const Calculator = () => {
  // track state of first number entered (firstNum) and all other entered numbers (num)
  const [num, setNum] = useState("0");
  const [firstNum, setFirstNum] = useState("0");

  // track number clicks
  const handleNumberClick = (e) => {
    // use concatenation of number clicks to build number and parseInt to ignore irrelevant zeroes
    setNum((previousState) => parseInt(previousState + e.target.innerText));
  };

  // track the latest operator click
  const handleOperationClick = (e) => {
    // change "- / x" operators to "+" (because only one needs to be operational for this homework) 
    if (e.target.innerText === "+" || e.target.innerText === "-" || e.target.innerText === "/" || e.target.innerText === "x") {
      // any time an operator is clicked, set firstNum and reset num to track next number
      setFirstNum(num);
      setNum(0);
    } else if (e.target.innerText === "=") {
      // for "=" operator, if firstNum exists, calculate result
      if (firstNum != "0") {
        setNum(firstNum+num);
      }
    } else {
      // when clear operator is clicked, clear all num states
      setNum(0);
      setFirstNum(0);
    }
  };

  return (
    <div>
      <Screen value={num} />
      <div style={{ display: "flex" }}>
        <div>
          <Number value={0} onClick={handleNumberClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
        </div>
        <div>
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={7} onClick={handleNumberClick} />
        </div>
        <div>
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
          <Operation value="clear" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
        </div>
        <div>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
