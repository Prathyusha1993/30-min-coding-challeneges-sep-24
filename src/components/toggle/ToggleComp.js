import React, { useState } from 'react'

const ToggleComp = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <div>
        <h2>Toggle Component</h2>
        <button onClick={() => setToggle(prev => !prev)}>{toggle ? 'Hide' : 'Show'}Content</button>
        {toggle && <p>Toggling some content.</p>}
    </div>
  )
}

export default ToggleComp;