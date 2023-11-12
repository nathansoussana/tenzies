import { useState } from 'react'
import Die from './components/Die'
import Button from './components/Button'

export default function App() {
  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const dice = Array.from({ length: 10 }, (die) => ({ value: Math.ceil(Math.random(die) * 6), isHeld: false }))
    return dice
  }

  function rollDice() {
    setDice(allNewDice())
  }

  const diceHand = dice.map((die, index) => <Die key={index} value={die.value} />)

  return (
    <main>
      <div className="dice-container">
        {diceHand}
      </div>
      <Button text="Roll" onClick={rollDice} />
    </main>
  )
}