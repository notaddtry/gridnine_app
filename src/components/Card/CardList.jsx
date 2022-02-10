import React from 'react'
import CardItem from './CardItem'

const CardList = (props) => {
  const { flights, handleShowMore } = props

  return (
    <div className="card-list_wrapper">
      {flights.map((flight) => (
        <CardItem key={flight.flightToken} {...flight} />
      ))}
      <button className="btn_show-more" onClick={handleShowMore}>
        Показать еще
      </button>
    </div>
  )
}

export default CardList
