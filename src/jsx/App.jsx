import { useState } from 'react'
import Die from './components/Die'
import Button from './components/Button'

export default function App() {
  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const dice = Array.from({ length: 10 }, (die) => Math.ceil(Math.random(die) * 6))
    return dice
  }

  function handleClick() {
    setDice(allNewDice())
  }

  const diceHand = dice.map((die, index) => <Die key={index} value={die} />)

  return (
    <main>
      <div className="dice-container">
        {diceHand}
      </div>
      <Button text="Roll" onClick={handleClick} />
    </main>
  )
}