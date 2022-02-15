import React from 'react'

const Company = () => {
  return (
    <form className="filterCompany_wrapper">
      <p>Авиакомпания</p>
      <div className="filterCompany_main">
        <div>
          <input type="checkbox" id="checkboxCompany1" />
          <label htmlFor="checkboxCompany1">1 пересадка</label>
        </div>

        <div>
          <input type="checkbox" id="checkboxCompany2" />
          <label htmlFor="checkboxCompany2">Без пересадок</label>
        </div>
      </div>
    </form>
  )
}

export default Company
