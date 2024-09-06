import { useState } from 'react';

interface Props {
  stepper: number;
  start?: number;
  end?: number;
  initialCount?: number;
  toFixed?: number;
}

const useCounter = ({
  stepper,
  start,
  end,
  initialCount = 0,
  toFixed = 0,
}: Props) => {
  const [count, setCount] = useState<number>(initialCount);

  const onIncrement = () => {
    if (!end) {
      setCount((prev) => prev + stepper);
      return;
    }

    if (count === end) return;

    setCount((prev) => prev + stepper);
  };

  const onDecrement = () => {
    if (!start) {
      setCount((prev) => prev - stepper);
      return;
    }

    if (count === start) return;

    setCount((prev) => prev - stepper);
  };

  return { value: count.toFixed(toFixed), onIncrement, onDecrement };
};

export default useCounter;
