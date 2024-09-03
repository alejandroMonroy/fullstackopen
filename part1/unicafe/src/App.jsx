import { useState } from "react"
import Feedback from "./Feedback"
import Header from "./Header"
import Statistics from "./Statistics"

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header />
      <Feedback />
      <Statistics 
        good={good} 
        handleGood={()=>setGood} 
        neutral={neutral} 
        handleNeutral={()=>setNeutral} 
        bad={bad} 
        handleBad={()=>setBad} 
      />
    </div>
  )
}

export default App