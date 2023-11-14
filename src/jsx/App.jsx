import { useState } from 'react'
import { nanoid } from 'nanoid'
import Die from './components/Die'
import Button from './components/Button'

export default function App() {
  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const dice = Array.from(
      { length: 10 }, 
      (die) => (
        { 
          value: Math.ceil(Math.random(die) * 6), 
          isHeld: false ,
          id: nanoid
        }
      )
    )
    return dice
  }

  function rollDice() {
    setDice(allNewDice())
  }

  function holdDie(id) {
    setDice(oldDice => (
      oldDice.map((die, index) => (
        index === id ? {...die, isHeld: !die.isHeld} : die))
      )
    )
  }

  const diceHand = dice.map((die, index) => (
      <Die 
        key={index} 
        value={die.value} 
        isHeld={die.isHeld} 
        onClick={() => holdDie(index)} 
      />
    )
  )

  return (
    <main>
      <div className="dice-container">
        {diceHand}
      </div>
      <Button text="Roll" onClick={rollDice} />
    </main>
  )
}