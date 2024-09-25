import { useState } from "react"

import Country from './Country'

const CountryListItem = ({name}) => {
    const [showCountryDetail, setShowCountryDetail ] = useState(false)

    const handleShowCountryDetail = () => {
        setShowCountryDetail(!showCountryDetail)
    }

    return(
        <>
            {showCountryDetail ? <Country name={name} /> : <h1>{name}</h1>}
            <button onClick={handleShowCountryDetail}>{showCountryDetail ? 'hide' : 'show'}</button>
        </>        
    )
}

export default CountryListItem