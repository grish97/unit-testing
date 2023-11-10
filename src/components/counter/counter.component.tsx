import {FC, useState} from "react";
import {useCounter} from "../../hooks/useCounter";

export const CounterComponent: FC = () => {
  const { count, increment, setCustomCount } = useCounter();
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>

      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />

      <button onClick={() => setCustomCount(amount)}>Set</button>
    </div>
  );
};
