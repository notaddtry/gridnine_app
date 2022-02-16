import React from 'react'
import Sort from './Sort'
import Filter from './Filter'
import Price from './Price'
import Company from './Company'

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
    onFilterCompany,
    setFilterCompanyValue,
    onCheckCompany,
    setCheckCompany,
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
      <Company
        onFilterCompany={onFilterCompany}
        setCheckCompany={setCheckCompany}
        onCheckCompany={onCheckCompany}
        setFilterCompanyValue={setFilterCompanyValue}
      />
    </div>
  )
}

export default Sidebar
