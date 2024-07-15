// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import "./App.css";


const App = () => {
  const [count, setcount] = useState(0);

  const increase = () => {
    setcount(count + 1);
  }
  const decrease = () => {
    setcount(count - 1);
  }

  return (
    <>
      <div className="box">
        <h1>Counter</h1>
            </div>
        <h1>{count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </>
  )
}

export default App;