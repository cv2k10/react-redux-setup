import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, signin } from '../actions';
import counterReducer from '../reducers/counterReducer';

function Timer() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.logged);

    const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Timer {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <p><button onClick={() => dispatch(reset())}>Reset</button></p>

      {isLogged? <p>Private login text</p>: null}
      <button onClick={() => dispatch(signin())}>Toggle sign up</button>
    </div>
  );
}

export default Timer;