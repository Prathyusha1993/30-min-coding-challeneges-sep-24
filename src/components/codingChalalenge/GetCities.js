import React, {useEffect, useState} from 'react';

const GetCities = () => {
    const [countries, setCountries] = useState([]);
    // const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const getCities = async (country) => {
       const states = await getStatesByCountry(country);
       const cityPromise = states?.map(state => getCitiesByState(state));
       const cities = await Promise.all(cityPromise);
       setCities(cities.flat())
      }

      const getStatesByCountry = (country) => {
        const tempData = ['CA', 'AZ', 'NY'];
        return Promise.resolve(tempData);
      }

      const handleGetCities = () => {
        getCities(countries);
      }

      const getCitiesByState = (state) => {
        let tempData;
        
        if (state === 'CA') {
            tempData = ['San Francisco', 'Los Angeles', 'San Diego'];
        } else if (state === 'AZ') {
            tempData = ['Phoenix', 'Tempe', 'Tuscon'];
        } else if (state === 'NY') {
            tempData = ['New York', 'Albany', 'Brooklyn'];
        }
        
        return Promise.resolve(tempData);
      }

    return (
        <div>
            <input type='text' value={countries} onChange={(e) => setCountries(e.target.value)} />
            <button onClick={handleGetCities}>Get Cities</button>
            <ul>
                {cities.map((city, index) => {
                    return (
                        <li key={index}>{city}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default GetCities;