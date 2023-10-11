import { useState } from 'react';
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

const Calculator = () => {
  // track first number entered (firstNum), all other numbers after the first (num), and the operator
  const [firstNum, setFirstNum] = useState("0");
  const [num, setNum] = useState("0");
  const [operator, setOperator] = useState("");

  // handle all number clicks and build numbers with concatenation; use parseInt to ignore irrelevant zeroes
  const handleNumberClick = (e) => {
    setNum((previousState) => parseInt(previousState + e.target.innerText));
  };

  // handle most recent operator click
  const handleOperationClick = (e) => {
    // if not equal or clear, set operator, firstNum, and reset num to track next number 
    if (e.target.innerText === "+" || e.target.innerText === "-" || e.target.innerText === "/" || e.target.innerText === "x") {
      // set operator (for eval, if the operator is "x", change to multiplicaton symbol "*")
      if (e.target.innerText === "x") { 
        setOperator("*") 
      } else {
        setOperator(e.target.innerText);
      }
      setFirstNum(num);
      setNum(0);
    } else if (e.target.innerText === "=") {
      // for "=" operator, if firstNum exists, calculate result
      if (firstNum !== "0") {
        // not great for security reasons, but for this homework, use of eval is allowed
        // eslint-disable-next-line no-eval
        let result=eval(firstNum+operator+num);
        setNum(result);
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
