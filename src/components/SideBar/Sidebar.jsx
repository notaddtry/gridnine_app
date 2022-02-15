import React from 'react'
import Sort from './Sort'
import Filter from './Filter'
import Price from './Price'

const Sidebar = (props) => {
  const {
    onSort,
    onFilter,
    onCheck,
    onFilterPrice,
    filterPrice,
    price,
    setSortValue,
    setFilterValue,
    setCheck,
  } = props

  return (
    <div className="sidebar_wrapper">
      <Sort onSort={onSort} setSortValue={setSortValue} />
      <Filter
        onFilter={onFilter}
        onCheck={onCheck}
        setFilterValue={setFilterValue}
        setCheck={setCheck}
      />
      <Price
        onFilterPrice={onFilterPrice}
        filterPrice={filterPrice}
        price={price}
      />
    </div>
  )
}

export default Sidebar
