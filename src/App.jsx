
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,incrementByAmount,reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
      dispatch(increment());
  }

  function handleDecrementClick() {
      dispatch(decrement());
  }

  function handleResetClick() {
      dispatch(reset());
  }

  function handleIncAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container card'>
  <button className='read-the-docs' onClick={handleIncrementClick}> + </button>
  <p>Count: {count}</p>
  <button className='read-the-docs' onClick={handleDecrementClick}> - </button>
  <br/>
  <br/>
  <button className='read-the-docs' onClick={handleResetClick}> Reset </button>
  <br/>
  <br/>
  <input 
    type='Number'
    value={amount}
    placeholder='Enter Amount'
    onChange={(e) => setAmount(e.target.value)}
    style={{padding: '0.5em', fontSize: '1.2em'}}
  />
  <br/>
  <br/>
  <button className='read-the-docs' onClick={handleIncAmountClick}> Inc by Amount </button>
</div>

  )
}

export default App
