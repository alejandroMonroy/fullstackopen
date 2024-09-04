import { useState } from "react"
import Feedback from "./Feedback"
import Header from "./Header"
import Statistics from "./Statistics"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setBad(bad + 1)
  
  return (
    <div>
      <Header />
      <Feedback 
        handleGood={handleGood}
        handleNeutral={handleNeutral} 
        handleBad={handleBad}
      />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App