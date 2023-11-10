import {useState} from "react";

interface IPropType {
  initialCount?: number;
}

export const useCounter = ({ initialCount = 0 }: IPropType = {}) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const setCustomCount = (count: number) => setCount(count);

  return {count, increment, decrement, setCustomCount};
};
