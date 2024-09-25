import { useEffect, useState } from 'react'

import axios from 'axios'

import './App.css'
import Country from './Country'
import CountryListItem from './CountryListItem'

function App() {
  const [countryQuery, setCountryQuery] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  const handleCountryName = (event) => {
    setCountryQuery(event.target.value)
  }

  useEffect(()=>{
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(response => {
          setAllCountries(response.data.map(data => data.name.common))
        })
        .catch(error => alert(error))
  }, [])

  useEffect(()=>{
    setFilteredCountries(allCountries.filter(country => country.toLowerCase().includes(countryQuery.toLowerCase())))
  }, [countryQuery, allCountries])

  return (
    <>
      <input value={countryQuery} onChange={handleCountryName}/>
      {
        countryQuery === '' ? <p>Type to search a country</p> :
        filteredCountries.length === 0 ? 
            <p>No country found</p> :
            filteredCountries.length === 1 ?
              <Country name={filteredCountries[0]}/> :
              filteredCountries.length <= 10 ?
                <ul>
                  {
                    filteredCountries
                      .map((country, index) => 
                        <li key={index}><CountryListItem name={country}/></li>
                      )
                  }
                </ul>:
                <p>Too many matches, specify another filter</p>
      }
    </>
  )
}

export default App
