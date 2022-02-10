import React from 'react'
import CardTrip from './CardTrip'

const CardItem = (props) => {
  const { flight } = props
  const tripFrom = flight.legs[0]
  const tripBack = flight.legs[1]

  return (
    <div className="card-item_wrapper">
      <div className="card-item_header">
        <span>{flight.carrier.caption}</span>
        <div className="card-item_header-price">
          <span>
            {flight.price.total.amount} &nbsp;
            {flight.price.total.currency}
          </span>
          <span>Стоимость для одного пассажира</span>
        </div>
      </div>
      <CardTrip tripTo={tripFrom} />
      <br />
      <CardTrip tripTo={tripBack} />
      <button className="btn-select">ВЫБРАТЬ</button>
    </div>
  )
}

export default CardItem
