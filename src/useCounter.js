import { useState } from "react";
export const useCounter = () => {
  //const { counterInc, counterDec, counter0 } = useCounter();
  const [counter, setCounter] = useState(0);
  const counterInc = () => {
    setCounter(counter + 1);
  };
  const counterDec = () => {
    setCounter(counter - 1);
  };
  const counter0 = () => {
    setCounter(0);
  };
  return { counter, counterInc, counterDec, counter0 };
};
