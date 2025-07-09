import { useState } from 'react'
import './About.css'

function About() {
  const [number] = useState(() => Math.floor(Math.random() * 10) + 1)
  const [guess, setGuess] = useState('')
  const [message, setMessage] = useState('')

  const handleGuess = (e) => {
    e.preventDefault()
    const numGuess = parseInt(guess, 10)
    if (numGuess === number) {
      setMessage('🎉 Correct! You guessed the number!')
    } else if (numGuess > number) {
      setMessage('Too high! Try again.')
    } else {
      setMessage('Too low! Try again.')
    }
  }

  return (
    <div>
      <h1>About Page</h1>
      <h2>Guess the Number Game</h2>
      <form className="guess-form" onSubmit={handleGuess}>
        <input
          type="number"
          value={guess}
          onChange={e => setGuess(e.target.value)}
          min="1"
          max="10"
          placeholder="Enter a number 1-10"
        />
        <button type="submit">Guess</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

export default About