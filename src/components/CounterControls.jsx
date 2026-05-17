import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const CounterControls = () => {
  const { increment, decrement, reset } = useContext(CounterContext);

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default CounterControls;