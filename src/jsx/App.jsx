import { useState } from 'react'
import { nanoid } from 'nanoid'
import Die from './components/Die'
import Button from './components/Button'

export default function App() {
  const [dice, setDice] = useState(allNewDice())

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: nanoid
    }
  }

  function allNewDice() {
    const dice = Array.from(
      { length: 10 }, 
      () => (generateNewDie())
    )
    return dice
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => (
      die.isHeld ? die : generateNewDie()
    )))
  }

  function holdDice(id) {
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
        onClick={() => holdDice(index)} 
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