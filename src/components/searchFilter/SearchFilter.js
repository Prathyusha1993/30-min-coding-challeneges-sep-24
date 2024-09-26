import React, { useState } from 'react';

const ITEMS = ['apple', 'banana', 'orange', 'grapes', 'mango', 'watermelon', 'kiwi', 'strawberry',
     'blueberry', 'blackberry', 'raspberry', 'pineapple', 'papaya', 'pear', 'peach', 'plum', 'cherry',
      'apricot', 'fig', 'lemon', 'lime', 'coconut', 'avocado', 'pomegranate', 'lychee', 'dragonfruit',
       'guava', 'passionfruit', 'kiwano', 'cantaloupe', 'honeydew'];

const SearchFilter = () => {
    const [searchInput, setSearchInput] = useState('');
    const listedItems = ITEMS.filter((item) => item.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <div>
        <h2>Search Filter</h2>
        <div>
            <input type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <ul>
                {listedItems.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default SearchFilter