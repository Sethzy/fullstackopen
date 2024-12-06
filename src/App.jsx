import { useState } from 'react'
import Button from './button'

const StatisticLine = ({text,value}) => {
  return <tr><td>{text}</td><td>{value}{text === "positive" ? "%" : ""}</td></tr>
}

const Statistics = ({average,positive,allClicks,good,neutral,bad}) => {
  if (allClicks === 0) {
    return <p>No feedback given</p> 
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />  
          <StatisticLine text ="all" value={allClicks} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    )
  }
}

const App = () => {

  const header = 'give feedback'
  const header2 = 'statistics'

  // save clicks of each Button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setallClicks] = useState(0)

  // calculate average and positive
  let average = allClicks === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / allClicks
  let positive = allClicks === 0 ? 0 : (good / allClicks) * 100

  const handleGoodClick = () => {
    setGood(good + 1)
    setallClicks(allClicks + 1)

  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setallClicks(allClicks + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setallClicks(allClicks + 1)
  }


  return (
    <div>
      <h1>{header}</h1>
      <Button onClick={handleGoodClick} text="good"/>
      <Button onClick={handleNeutralClick} text="neutral"/>
      <Button onClick={handleBadClick} text="bad"/>
      <h1>{header2}</h1>
      <Statistics allClicks={allClicks} average={average} positive={positive} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App