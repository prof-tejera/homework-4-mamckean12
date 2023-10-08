import { useState } from 'react';
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */
  const [num, setNum] = useState("0");
  const [firstNum, setFirstNum] = useState("0");
  const [operator, setOperator] = useState("");

  /** TODO: what happens when I click a number? */
  const handleNumberClick = (e) => {
    console.log("number clicked: ", e.target.innerText);
    // concatenate string of numbers based on what user clicks
    // use parseInt to ignore "0", except when relevant
    setNum((previousState) => parseInt(previousState + e.target.innerText));
    console.log("num state: ", num);
  };

  // const handleCalc = () => {
  //   setNum(firstNum + secondNum);
  // };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = (e) => {
    console.log("operator clicked: ", e.target.innerText);
    // track most recent operator click
    // change "-, /, x" operators to "+" (only "+" operator is functional for this homework) 
    if (e.target.innerText === "+" || e.target.innerText === "-" || e.target.innerText === "/" || e.target.innerText === "x") {
      setOperator("+");
      console.log("operator: ", operator)
      // any time an operator is clicked, set firstNum and reset num
      setFirstNum(num);
      setNum(0);
      console.log("firstNum: ", firstNum);
      console.log("num reset: ", num);
    } else if (e.target.innerText === "=") {
      setOperator(e.target.innerText);
      if (firstNum != "0") {
        setNum(firstNum+num);
      }
      // when equal is clicked, set the second number and calculate
      // setSecondNum(num);
      // handleCalc();
      console.log("operator: ", operator);
    } else {
      setOperator(e.target.innerText);
      // when clear operator is clicked, clear all num states
      setNum(0);
      setFirstNum(0);
      console.log("operator: ", operator);
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
