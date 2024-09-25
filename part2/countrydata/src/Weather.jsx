import { useEffect, useState } from "react"

import axios from "axios"

const Weather = ({name, lat, lon}) => {
    const [weather, setWeather] = useState(null)

    useEffect(()=>{
        axios.
            get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&forecast_days=1`)
                .then(response => setWeather(response.data))
    }, [lat, lon])
    
    return(
        <>
            <h3>Weather in {name}</h3>
            {
                weather ? 
                    <>
                        <p>temperature {weather.current.temperature_2m} Celcius</p>
                        <p>wind {weather.current.wind_speed_10m} m/s</p>
                    </> : 
                    null
            }            
        </>
    )
}

export default Weather