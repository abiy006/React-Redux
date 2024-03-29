//useSelector for displaying store data
//useDispatch for updating store data
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter_slice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count.counter);
  const show = useSelector((state) => state.count.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementByHandler = () => {
    dispatch(counterActions.incrementBy(100)); //{ type: SOME_UNIQUE_IDENTIFIER, payload: 100}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByHandler}>Increment by 100</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
