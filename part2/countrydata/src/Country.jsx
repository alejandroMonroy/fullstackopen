import { useEffect, useState } from "react"

import axios from "axios"
import Weather from "./Weather"

const Country = ({name}) => {
    const [country, setCountry] = useState(null)

    useEffect(()=>{
        axios
            .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
                .then(response => {
                    setCountry(response.data)    
                })
                .catch(error => alert(error))
    }, [name])

    return(
        country ?
        <>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital[0]}</p>       
            <p>Area {country.area}</p>        
            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={country.flags.png}/>
            <Weather name={country.name.common} lat={country.latlng[0]} lon={country.latlng[1]}/>
        </>
        : <p>Loading...</p>
    )
}

export default Country