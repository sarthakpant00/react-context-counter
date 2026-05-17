import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const CounterDisplay = () => {
  const { count } = useContext(CounterContext);

  return <p>Current Count: {count}</p>;
};

export default CounterDisplay;