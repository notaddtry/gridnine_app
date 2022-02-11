import React, { useState, useEffect } from 'react'
import CardList from '../components/Card/CardList'
import { loadFlights } from '../utils/api'
import { filterCost, filterDate } from '../components/helpers/filter/filterCost'
import Sidebar from '../components/SideBar/Sidebar'

const Main = () => {
  const [flights, setFlights] = useState([])
  const [count, setCount] = useState(5)

  const handleShowMore = () => {
    setCount((count) => count + 5)
  }

  const handleSort = (choose) => {
    let filteredFlights = [...flights]

    switch (choose) {
      case 'TO_MAX_COST':
        filteredFlights = filteredFlights.sort((a, b) => filterCost(a, b))
        setFlights(filteredFlights)

        break
      case 'TO_LOWER_COST':
        filteredFlights = filteredFlights.sort((a, b) => filterCost(a, b))
        setFlights(filteredFlights.reverse())

        break
      case 'TO_LOWER_TIME':
        filteredFlights = filteredFlights.sort((a, b) => filterDate(a, b))
        setFlights(filteredFlights)

      default:
        return
    }
  }

  const handleFilter = (choose) => {
    let filteredFlights = []
    const allFlights = loadFlights().flights
    switch (choose) {
      case 'ONE_TRANSFER':
        filteredFlights = allFlights.filter(
          (flight) =>
            flight.flight.legs[0].segments.length === 2 &&
            flight.flight.legs[1].segments.length === 2
        )
        setFlights(filteredFlights)
        break
      case 'NO_TRANSFER':
        filteredFlights = allFlights.filter(
          (flight) =>
            flight.flight.legs[0].segments.length === 1 &&
            flight.flight.legs[1].segments.length === 1
        )
        setFlights(filteredFlights)
        break
      default:
        return
    }
  }

  useEffect(() => {
    const data = loadFlights().flights.slice(0, count)
    setFlights(data)
  }, [count])

  return (
    <>
      <CardList flights={flights} handleShowMore={handleShowMore} />
      <Sidebar onSort={handleSort} onFilter={handleFilter} />
    </>
  )
}

export default Main
