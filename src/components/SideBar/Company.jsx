import React, { useRef } from 'react'

const Company = (props) => {
  const {
    setFilterCompanyValue,
    onCheckCompany,
    setCheckCompany,
    onFilterCompany,
  } = props
  const refAeroflot = useRef('')
  const refAirFrance = useRef('')

  const handleFilterCompany = (event) => {
    if (event.target.value === refAeroflot.current.value) {
      setCheckCompany({
        ...onCheckCompany,
        Aeroflot: !onCheckCompany.Aeroflot,
        AirFrance: false,
      })
    } else if (event.target.value === refAirFrance.current.value) {
      setCheckCompany({
        ...onCheckCompany,
        Aeroflot: false,
        AirFrance: !onCheckCompany.AirFrance,
      })
    }
    setFilterCompanyValue(event.target.value)
    onFilterCompany(event.target.value)
  }

  return (
    <form className="filterCompany_wrapper">
      <p>Авиакомпания</p>
      <div className="filterCompany_main">
        <div>
          <input
            type="checkbox"
            id="checkboxCompany1"
            value="AirFrance"
            onChange={handleFilterCompany}
            checked={onCheckCompany.AirFrance}
            ref={refAirFrance}
          />
          <label htmlFor="checkboxCompany1">Air France</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="checkboxCompany2"
            value="Aeroflot"
            onChange={handleFilterCompany}
            checked={onCheckCompany.Aeroflot}
            ref={refAeroflot}
          />
          <label htmlFor="checkboxCompany2">Аэрофлот</label>
        </div>
      </div>
    </form>
  )
}

export default Company
