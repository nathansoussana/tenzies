import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Die from './components/Die'
import Button from './components/Button'

/**
 * Challenge: Tie off loose ends!
 * 1. If tenzies is true, Change the button text to "New Game"
 * 2. If tenzies is true, use the "react-confetti" package to
 *    render the <Confetti /> component 🎉
 * 
 *    Hint: don't worry about the `height` and `width` props
 *    it mentions in the documentation.
 */

export default function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  
  
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const sameValue = dice.every(die => die.value === dice[0].value)
    if (allHeld && sameValue) {
      setTenzies(true)
      console.log('Tenzies!')
    }
  },
    [dice]
  )

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
      {tenzies && <Confetti />}
      <h1 className="title">
        Tenzies
      </h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
      </p>
      <div className="dice-container">
        {diceHand}
      </div>
      <Button 
        text={tenzies ? 'New Game' : 'Roll'} 
        onClick={rollDice} 
      />
    </main>
  )
}