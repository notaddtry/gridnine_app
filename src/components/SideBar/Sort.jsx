import React from 'react'

const Sort = (props) => {
  const { onSort, setSortValue } = props

  const handleSort = (event) => {
    setSortValue(event.target.value)
    onSort(event.target.value)
  }

  return (
    <form className="sort_wrapper">
      <p>Сортировать</p>
      <div className="sort_main">
        <div>
          <input
            type="radio"
            id="contactChoice1"
            name="contact"
            value="TO_MAX_COST"
            onChange={handleSort}
          />
          <label htmlFor="contactChoice1">По возрастанию цены</label>
        </div>

        <div>
          <input
            type="radio"
            id="contactChoice2"
            name="contact"
            value="TO_LOWER_COST"
            onChange={handleSort}
          />
          <label htmlFor="contactChoice2">По убываниию цены</label>
        </div>

        <div>
          <input
            type="radio"
            id="contactChoice3"
            name="contact"
            value="TO_LOWER_TIME"
            onChange={handleSort}
          />
          <label htmlFor="contactChoice3">По времени в пути</label>
        </div>
      </div>
    </form>
  )
}

export default Sort
