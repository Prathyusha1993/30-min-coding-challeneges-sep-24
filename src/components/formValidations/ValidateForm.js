import React, { useState } from 'react'

const ValidateForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    // const [formData, setFormData] = useState({name:'', email:''});
    // const [dataArr, setDataArr] = useState([]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setFormData([...dataArr, formData]);
    //     setFormData({name:'', email:''});

    //     //if posting data to post api
    //     fetch('url', dataArr)
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
    // }

    // const handleChange = (e) => {
    //     setFormData({...formData, [e.target.name]: e.target.value});
    // }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(name === '' || email === ''){
            return setError('Please fill in all fields');
        } else if(!/\S+@\S+\.\S+/.test(email)){
            return setError('Please enter a valid email');
        } else {
            setError('');
            setEmail('');
            setName('');
            alert('form submitted');
        }

    };



  return (
    <div>
        <h2>Validate Input Forms</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmitForm}>
            <label>Name:</label>
            <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
            
            <label>Email:</label>
            <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ValidateForm;