import { useState } from 'react'
import Die from './components/Die'

export default function App() {
  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const dice = Array.from({ length: 10 }, (die) => Math.ceil(Math.random(die) * 6))
    return dice
  }

  const diceHand = dice.map((die, index) => <Die key={index} value={die} />)

  return (
    <main>
      <div className="dice-container">
        {diceHand}
      </div>
    </main>
  )
}