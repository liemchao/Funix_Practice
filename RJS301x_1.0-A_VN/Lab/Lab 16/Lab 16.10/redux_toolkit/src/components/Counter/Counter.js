import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/slice/CounterSlice';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment());
  }

  const decrement = () => {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleHideNShow());
  }

  const { counter, isShow } = useSelector(state => state.counter)

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={`${classes.value} ${isShow ? '' : classes['d-none']}`}>{counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
