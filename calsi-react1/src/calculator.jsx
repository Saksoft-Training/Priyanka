import { useState } from "react";
import "./Calculator.css"; 

export default function Calculator() {
  const [input, setInput] = useState("");

  const appendToInput = (value) => {
    setInput((prev) => {
      if (prev === "0" || prev === "Error") return value;
      return prev + value;
    });
  };

  const clearDisplay = () => {
    setInput("");
  };

  const removelast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      const expression = input;

      if (!/^[0-9+\-*/%.() ]+$/.test(expression)) {
        throw new Error("Invalid Expression");
      }

      const lastOperatorIndex = Math.max(
        expression.lastIndexOf("+"),
        expression.lastIndexOf("-"),
        expression.lastIndexOf("*"),
        expression.lastIndexOf("/"),
        expression.lastIndexOf("%")
      );

      if (lastOperatorIndex === -1) {
        const number = parseFloat(expression);
        if (isNaN(number)) throw new Error("Invalid number");
        setInput(String(number));
        return;
      }

      const operator = expression[lastOperatorIndex];
      const num1 = parseFloat(expression.slice(0, lastOperatorIndex));
      const num2 = parseFloat(expression.slice(lastOperatorIndex + 1));

      let result;

      switch (operator) {
        case "+": result = num1 + num2;
                   break;
        case "-": result = num1 - num2;
                   break;
        case "*": result = num1 * num2;
                   break;
        case "/": if (num2 === 0) throw new Error("Divide by zero");
                  result = num1 / num2;
                   break;
        case "%": result = num1 % num2;
                   break;
        default:
          throw new Error("Invalid operator");
      }

      if (isNaN(result) || !isFinite(result)) throw new Error("Error");
      setInput(String(result));
    } catch {
      setInput("Error");
    }
  };

  return (
    <div id="container">
      <div id="calculator">
        <input type="text" value={input} placeholder="0" readOnly />
      </div>
      <div className="operator" id="number-pad">
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => appendToInput("%")}>%</button>
        <button onClick={() => appendToInput("/")}>/</button>
        <button className="rmbtn" onClick={removelast}>D</button>
      </div>

      <div id="number-pad">
        <button onClick={() => appendToInput("7")}>7</button>
        <button onClick={() => appendToInput("8")}>8</button>
        <button onClick={() => appendToInput("9")}>9</button>
        <button className="operator" onClick={() => appendToInput("*")}>*</button>
      </div>

      <div id="number-pad">
        <button onClick={() => appendToInput("4")}>4</button>
        <button onClick={() => appendToInput("5")}>5</button>
        <button onClick={() => appendToInput("6")}>6</button>
        <button className="operator" onClick={() => appendToInput("+")}>+</button>
      </div>

      <div id="number-pad">
        <button onClick={() => appendToInput("1")}>1</button>
        <button onClick={() => appendToInput("2")}>2</button>
        <button onClick={() => appendToInput("3")}>3</button>
        <button className="operator" onClick={() => appendToInput("-")}>-</button>
      </div>

      <div id="number-pad">
        <button onClick={() => appendToInput("00")}>00</button>
        <button onClick={() => appendToInput("0")}>0</button>
        <button onClick={() => appendToInput(".")}>.</button>
        <button className="equalbtn" onClick={calculate}>=</button>
      </div>
    </div>
  );
}
