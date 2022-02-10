function setTime(travelTime) {
  return Math.floor(travelTime / 60) + 'ч' + (travelTime % 60) + 'мин'
}

export { setTime }
