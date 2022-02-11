import React from 'react'

const Filter = (props) => {
  const { onFilter } = props

  const handleFilter = (event) => {
    onFilter(event.target.value)
  }

  return (
    <form className="filter_wrapper">
      <p>Фильтровать</p>
      <div className="filter_main">
        <div>
          <input
            type="checkbox"
            id="checkbox1"
            value="ONE_TRANSFER"
            onChange={handleFilter}
          />
          <label htmlFor="checkbox1">1 пересадка</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="checkbox2"
            value="NO_TRANSFER"
            onChange={handleFilter}
          />
          <label htmlFor="checkbox2">Без пересадок</label>
        </div>
      </div>
    </form>
  )
}

export default Filter
