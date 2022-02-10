import React, { useState, useEffect } from 'react'
import CardList from './components/Card/CardList'
import { loadFlights } from './utils/api'

function App() {
  const [flights, setFlights] = useState([])
  const [count, setCount] = useState(5)

  const handleShowMore = () => {
    setCount((count) => count + 5)
  }

  useEffect(() => {
    const data = loadFlights().flights.slice(0, count)
    setFlights(data)
    console.log(flights)
  }, [count])

  return (
    <div className="App">
      <CardList flights={flights} handleShowMore={handleShowMore} />
    </div>
  )
}

export default App
