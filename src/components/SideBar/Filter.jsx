import React, { useRef } from 'react'

const Filter = (props) => {
  const { onFilter, onCheck, setCheck, setFilterValue } = props
  const refOneTransfer = useRef('')
  const refMoreTransfer = useRef('')

  const handleFilter = (event) => {
    if (event.target.value === refOneTransfer.current.value) {
      setCheck({
        ...onCheck,
        filterByOneTransfer: !onCheck.filterByOneTransfer,
        filterByMoreTransfer: false,
      })
    } else if (event.target.value === refMoreTransfer.current.value) {
      setCheck({
        ...onCheck,
        filterByOneTransfer: false,
        filterByMoreTransfer: !onCheck.filterByMoreTransfer,
      })
    }
    setFilterValue(event.target.value)
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
            value="MORE_TRANSFER"
            onChange={handleFilter}
            checked={onCheck.filterByOneTransfer}
            ref={refOneTransfer}
          />
          <label htmlFor="checkbox1">1 пересадка</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="checkbox2"
            value="NO_TRANSFER"
            onChange={handleFilter}
            checked={onCheck.filterByMoreTransfer}
            ref={refMoreTransfer}
          />
          <label htmlFor="checkbox2">Без пересадок</label>
        </div>
      </div>
    </form>
  )
}

export default Filter
