import React, {useEffect, useState} from 'react';
import './theme.css';

const DarkTheme = () => {
    const [toggle, setToggle] = useState(false);
    const theme = toggle ? 'dark' : 'light';

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    },[theme]);

  return (
    <div>
        <h2 className='head'>Dark Light Theme</h2>
        <button onClick={() => setToggle(prev => !prev)}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  )
}

export default DarkTheme;