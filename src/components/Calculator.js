import { useEffect, useRef, useState } from 'react';
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";



const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */
  // const [count, setCount] = useState(0);
  const[firstNum, setFirstNum] = useState("");
  const[secondNum, setSecondNum] = useState("");
  const[operator, setOperator] = useState("");    
  
  /** TODO: what happens when I click a number? */
  const handleNumberClick = (e) => {

    console.log("handleClick, value: ", e.target.innerHTML);
    setFirstNum(firstNum+e.target.innerHTML);
    console.log("num: ", firstNum);

  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = (e) => {
    console.log("firstNum: ", firstNum);
    console.log("handleOperator, operator: ", e.target.innerHTML);
    setOperator(e.target.innerHTML);
    console.log("operator: ", operator);
  };

  return (
    <div>
      <Screen value={123} />
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
