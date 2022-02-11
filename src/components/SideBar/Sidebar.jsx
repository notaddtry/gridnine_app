import React from 'react'
import Sort from './Sort'
import Filter from './Filter'

const Sidebar = (props) => {
  const { onSort, onFilter } = props

  return (
    <div className="sidebar_wrapper">
      <Sort onSort={onSort} />
      <Filter onFilter={onFilter} />
    </div>
  )
}

export default Sidebar
