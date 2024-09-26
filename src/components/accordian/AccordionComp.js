import React, { useState } from 'react';

const section = [
    {
        title: 'Section 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    },
    {
        title: 'Section 2',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    },
    {
        title: 'Section 3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    },
    {
        title: 'Section 4',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    }
];

const AccordionComp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleToggle = (index) =>{
        setCurrentIndex(currentIndex === index ? null : index);
    }
  return (
    <div>
        <h2>Accordion Component</h2>
        {section.map((item, index) => {
            return (
                <div key={index}>
                    <button onClick={() => handleToggle(index)}>{item.title}</button>
                    {currentIndex === index && <p>{item.content}</p>}
                </div>
            )
        })}
    </div>
  )
}

export default AccordionComp