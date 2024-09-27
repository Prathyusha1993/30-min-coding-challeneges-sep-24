import React, {useState} from 'react'

const VotingApp = () => {
    const [options, setOptions] = useState([
        {name: 'Option A', vote: 0},
        {name: 'Option B', vote: 0},
        {name: 'Option C', vote: 0},
        {name: 'Option D', vote: 0},
        {name: 'Option E', vote: 0},
    ]);

    const handleUpvote = (index) => {
        const updatedOptions = [...options];
        updatedOptions[index].vote += 1;
        setOptions(updatedOptions);
    };

    const handleDownVote = (index) => {
        const updatedOptions = [...options];
        if(updatedOptions[index].vote > 0){
            updatedOptions[index].vote -= 1
        }
        setOptions(updatedOptions);
    };

    const sortedOptions = options.slice().sort((a,b) => b.vote - a.vote);
  return (
    <div>
        <h2>VotingApp</h2>
        <ul>
            {sortedOptions.map((option, index) => (
                <li key={index}>
                    <p>{option.name} - {option.vote}</p>
                    <button onClick={() => handleUpvote(index)}>UpVote</button>
                    <button onClick={() => handleDownVote(index)}>DownVote</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default VotingApp;