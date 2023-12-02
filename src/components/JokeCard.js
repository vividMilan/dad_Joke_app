import React, { useState } from 'react'
import Header from './Header'

const JokeCard = () => {

  const [joke, setJoke] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const handleNewJoke = async () => {
    setTimeout(() => {})
    try{
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept' : 'application/json'
        }
      })

      const data = await response.json()
      setJoke(data.joke)
      setIsLoading(false)
    } catch(error) {
      console.error(error)
    }
  }

  return (
    
    <>
      <Header />
      <div className='joke-card'>
          {!joke ? "Press the Button to get a joke ;)" : <p>{joke}</p>}
          {isLoading ? "Loading..." : ''}
          <button onClick={() => handleNewJoke()}>Get a Joke</button>
      </div>
    </>
  )
}

export default JokeCard