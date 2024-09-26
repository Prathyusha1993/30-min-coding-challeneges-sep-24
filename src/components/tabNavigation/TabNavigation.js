import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact';

const tabs = ['Home', 'About', 'Contact'];
const content = [
    'Welcome to home page',
    'About us page',
    'Contact us page'
]

const TabNavigation = () => {
    const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div>
        <h2>Tab Navigation</h2>
        {/* this is with router dom */}
        {/* <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        </BrowserRouter> */}

        {/* this is without router dom */}
        <div>
            {tabs.map((tab, index) => (
                <button onClick={() => setActiveTab(index)}>{tab}</button>
            ))}
        </div>
        <p>{content[activeTab]}</p>
    </div>
  )
}

export default TabNavigation