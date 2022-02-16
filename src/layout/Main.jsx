import React, { useState, useEffect, useMemo } from 'react'
import CardList from '../components/Card/CardList'
import Sidebar from '../components/SideBar/Sidebar'
import { loadFlights } from '../utils/api'
import { filterCost, filterDate } from '../components/helpers/filter/filterCost'

const Main = () => {
  const memoFlights = useMemo(() => loadFlights().flights, [])
  const [flights, setFlights] = useState([])
  const [count, setCount] = useState(5)
  const [filterByCountTransfer, setFilterByCountTransfer] = useState({
    filterByOneTransfer: false,
    filterByMoreTransfer: false,
  })
  const [filterValue, setFilterValue] = useState('')
  const [sortValue, setSortValue] = useState('')
  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: Infinity,
  })
  const [filterCompany, setFilterCompany] = useState({
    AirFrance: false,
    Aeroflot: false,
  })
  const [filterCompanyValue, setFilterCompanyValue] = useState('')

  const handleShowMore = () => {
    setCount((count) => count + 5)
  }

  const handleSort = (chooseSort, arr) => {
    let filteredFlights = []
    if (!arr) {
      filteredFlights = [...flights]
    } else {
      filteredFlights = [...arr]
    }

    switch (chooseSort) {
      case 'TO_MAX_COST':
        filteredFlights = filteredFlights.sort((a, b) => filterCost(a, b))
        return filteredFlights

      case 'TO_LOWER_COST':
        filteredFlights = filteredFlights.sort((a, b) => filterCost(a, b))
        return filteredFlights.reverse()

      case 'TO_LOWER_TIME':
        filteredFlights = filteredFlights.sort((a, b) => filterDate(a, b))
        return filteredFlights

      default:
        return filteredFlights
    }
  }

  const handleFilter = (chooseFilter, arr) => {
    let filteredFlights = []
    if (!arr) {
      filteredFlights = [...memoFlights]
    } else {
      filteredFlights = [...arr]
    }

    switch (chooseFilter) {
      case 'MORE_TRANSFER':
        if (filterByCountTransfer.filterByOneTransfer) {
          filteredFlights = filteredFlights.filter(
            (flight) =>
              flight.flight.legs[0].segments.length >= 2 &&
              flight.flight.legs[1].segments.length >= 2
          )
        } else if (!filterByCountTransfer.filterByOneTransfer) {
          return (filteredFlights = [...filteredFlights])
        }

        return filteredFlights.slice(0, count)

      case 'NO_TRANSFER':
        if (filterByCountTransfer.filterByMoreTransfer) {
          filteredFlights = filteredFlights.filter(
            (flight) =>
              flight.flight.legs[0].segments.length === 1 &&
              flight.flight.legs[1].segments.length === 1
          )
        } else if (!filterByCountTransfer.filterByMoreTransfer) {
          filteredFlights = [...filteredFlights]
        }

        return filteredFlights.slice(0, count)
      default:
        return filteredFlights.slice(0, count)
    }
  }

  const handlePriceFilter = (price, arr) => {
    let filteredCostArray = []
    if (!arr) {
      filteredCostArray = [...memoFlights]
    } else {
      filteredCostArray = [...arr]
    }

    filteredCostArray = filteredCostArray.filter(
      (flight) =>
        +flight.flight.price.total.amount >= +price.minPrice &&
        +flight.flight.price.total.amount <= +price.maxPrice
    )
    return filteredCostArray.slice(0, count)
  }

  const handleFilterCompany = (chooseFilterCompany, arr) => {
    let filteredFlights = []
    if (!arr) {
      filteredFlights = [...memoFlights]
    } else {
      filteredFlights = [...arr]
    }

    switch (chooseFilterCompany) {
      case 'AirFrance':
        if (filterCompany.AirFrance) {
          filteredFlights = filteredFlights.filter(
            (flight) => flight.flight.carrier.caption === 'Air France'
          )
        } else if (!filterCompany.AirFrance) {
          return (filteredFlights = [...filteredFlights])
        }

        return filteredFlights.slice(0, count)

      case 'Aeroflot':
        if (filterCompany.Aeroflot) {
          filteredFlights = filteredFlights.filter(
            (flight) =>
              flight.flight.carrier.caption ===
              'Аэрофлот - российские авиалинии'
          )
        } else if (!filterCompany.Aeroflot) {
          filteredFlights = [...filteredFlights]
        }

        return filteredFlights.slice(0, count)
      default:
        return filteredFlights.slice(0, count)
    }
  }

  const filterAll = () => {
    let filteredArray = []
    filteredArray = [...handleFilter(filterValue)]
    filteredArray = [...handleFilterCompany(filterCompanyValue, filteredArray)]
    filteredArray = [...handlePriceFilter(price, filteredArray)]
    filteredArray = [...handleSort(sortValue, filteredArray)]
    return filteredArray
  }

  useEffect(() => {
    filterAll()
    setFlights(filterAll())
  }, [count, price, sortValue, filterByCountTransfer, filterCompany])

  return (
    <>
      <CardList flights={flights} handleShowMore={handleShowMore} />
      <Sidebar
        onSort={handleSort}
        onFilter={handleFilter}
        onCheck={filterByCountTransfer}
        setCheck={setFilterByCountTransfer}
        onFilterPrice={handlePriceFilter}
        filterPrice={setPrice}
        price={price}
        setFilterValue={setFilterValue}
        setSortValue={setSortValue}
        onFilterCompany={handleFilterCompany}
        setFilterCompanyValue={setFilterCompanyValue}
        onCheckCompany={filterCompany}
        setCheckCompany={setFilterCompany}
      />
    </>
  )
}

export default Main
