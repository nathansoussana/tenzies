import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Die from './components/Die'
import Button from './components/Button'

/**
 * Challenge: Allow the user to play a new game when the
 * button is clicked and they've already won
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

  function newGame() {
    setDice(allNewDice())
    setTenzies(false)
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
        onClick={tenzies ? newGame : rollDice}
      />
    </main>
  )
}