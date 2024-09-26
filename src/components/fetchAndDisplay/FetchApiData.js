import React, {useEffect, useState} from 'react'

const FetchApiData = () => {
    const [displayData, setDisplayData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getData = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(data.slice(0, 10));
            setDisplayData(data.slice(0, 10));
            setLoading(false);
        } catch(error){
            setError(error);
            setLoading(false);
        }
        
    };

    useEffect(() => {
        getData();
    }, []);

    if(loading) return <p>Loading....</p>
    if(error) return <p>Error: {error.message}</p>

  return (
    <div>
        <h2>Fetch Api Data</h2>
        {displayData.map((item) => {
            return (
                <div key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                </div>
            )
        })}
    </div>
  )
}

export default FetchApiData;