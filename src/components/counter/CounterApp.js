import React, { useState } from 'react'

const CounterApp = () => {
    const [count, setCount] = useState(0);

    const handleInc = () => { setCount(count + 1)};
    const handleDec = () => { setCount(count > 0 ? count - 1 : count)};

  return (
    <div>
        <h1>Counter App</h1>
        <button onClick={handleDec}>Decrement</button>
        <p>Count: {count}</p>
        <button onClick={handleInc}>Increment</button>
       
    </div>
  )
}

export default CounterApp