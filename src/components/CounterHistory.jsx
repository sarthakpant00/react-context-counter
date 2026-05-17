import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const CounterHistory = () => {
  const { history } = useContext(CounterContext);

  return (
    <div>
      <h3>History Log:</h3>
      <ul>
        {history.map((value, index) => (
          <li key={index}>Step {index + 1}: {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CounterHistory;