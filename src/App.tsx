import Counter from './components/Counter';
import useCounter from './hooks/useCounter';

function App() {
  const counterRegister = useCounter({ stepper: 1 });

  return (
    <>
      <Counter {...counterRegister} />
    </>
  );
}

export default App;
