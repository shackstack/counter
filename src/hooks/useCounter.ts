import { useState } from 'react';

interface Props {
  stepper: number;
}

const useCounter = ({ stepper }: Props) => {
  const [count, setCount] = useState<number>(0);

  const onIncrement = () => {
    setCount((prev) => prev + stepper);
  };

  const onDecrement = () => {
    setCount((prev) => prev - stepper);
  };

  return { value: count, onIncrement, onDecrement };
};

export default useCounter;
