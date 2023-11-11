import Die from './components/Die'

function allNewDice() {
  const dice = Array.from({ length: 10 }, (die) => Math.ceil(Math.random(die) * 6))
  return dice
}

function App() {
  return (
    <main>
      <div className="dice-container">
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
      </div>
    </main>
  )
}

export default App
