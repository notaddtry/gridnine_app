function filterCost(a, b) {
  let priceFirstTravel = +a.flight.price.total.amount
  let priceSecondTravel = +b.flight.price.total.amount
  if (priceFirstTravel > priceSecondTravel) {
    return 1
  } else if (priceFirstTravel < priceSecondTravel) {
    return -1
  }
  return 0
}

export { filterCost }

function filterDate(a, b) {
  let timeFirstTravel = a.flight.legs[0].duration + a.flight.legs[1].duration
  let timeSecondTravel = b.flight.legs[0].duration + b.flight.legs[1].duration
  if (timeFirstTravel > timeSecondTravel) {
    return 1
  } else if (timeFirstTravel < timeSecondTravel) {
    return -1
  }
  return 0
}

export { filterDate }
