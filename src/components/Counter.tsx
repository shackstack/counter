import './Counter.css';

interface CounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter = ({ value, onIncrement, onDecrement }: CounterProps) => {
  return (
    <div className='counter-container'>
      <button onClick={onIncrement}>+</button>
      <div>{value}</div>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default Counter;
