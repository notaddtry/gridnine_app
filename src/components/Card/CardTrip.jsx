import React from 'react'
import { printChecked } from '../helpers/printChecked'
import { setTime } from '../helpers/math/time'

const CardTrip = (props) => {
  const { tripTo } = props
  const segmentFirst = tripTo.segments[0]
  const segmentSecond = tripTo.segments[1]
  const departureAirport = segmentFirst.departureAirport
  const departureCity = segmentFirst.departureCity
  const departureDate = segmentFirst.departureDate
  let arrivalAirport = segmentFirst.arrivalAirport
  let arrivalCity = segmentFirst.arrivalCity
  let arrivalDate = segmentFirst.arrivalDate
  if (segmentSecond) {
    arrivalAirport = segmentSecond.arrivalAirport
    arrivalCity = segmentSecond.arrivalCity
    arrivalDate = segmentSecond.arrivalDate
  }
  const airLine = segmentFirst.airline
  const travelTime = tripTo.duration

  return (
    <div className="card-trip_wrapper">
      <div className="card-trip_header">
        {printChecked(departureCity)},{printChecked(departureAirport)}
        ---
        {printChecked(arrivalCity)},{printChecked(arrivalAirport)}
      </div>
      <div className="card-trip_main">
        <div className="card-trip_time">
          <span>{departureDate}</span>
          <br />
          <span>{setTime(travelTime)}</span>
          <br />
          <span>{arrivalDate}</span>
        </div>

        {segmentSecond ? (
          <span className="card-item_transfer">1 пересадка</span>
        ) : null}
      </div>
      <div className="card-trip_footer">Рейс выполняет: {airLine.caption}</div>
    </div>
  )
}

export default CardTrip
