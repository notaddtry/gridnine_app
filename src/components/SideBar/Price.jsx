import React, { useRef } from 'react'
import { useEffect } from 'react/cjs/react.development'

const Price = (props) => {
  const { onFilterPrice, filterPrice, price } = props

  const minRef = useRef(0)
  const maxRef = useRef(Infinity)

  const handleChangeMinPrice = (event) => {
    if (maxRef.current.value === '') {
      filterPrice({
        ...price,
        maxPrice: Infinity,
      })
    }
    if (event.target.value <= price.maxPrice) {
      filterPrice({
        ...price,
        minPrice: +event.target.value,
      })
    } else {
      return
    }
  }

  const handleChangeMaxPrice = (event) => {
    if (minRef.current.value === '') {
      filterPrice({
        ...price,
        minPrice: 0,
      })
    }
    if (event.target.value >= price.minPrice) {
      filterPrice((price) => ({
        ...price,
        maxPrice: +event.target.value,
      }))
    } else {
      return
    }
  }

  useEffect(() => {
    onFilterPrice(price)
  }, [price])

  return (
    <form className="filter-price_wrapper">
      <p>Цена</p>
      <div>
        <label htmlFor="priceLower">От</label>
        <input
          type="number"
          id="priceLower"
          onInput={handleChangeMinPrice}
          ref={minRef}
        />
      </div>
      <div>
        <label htmlFor="priceHigher">до</label>
        <input
          type="number"
          id="priceHigher"
          onInput={handleChangeMaxPrice}
          ref={maxRef}
        />
      </div>
    </form>
  )
}

export default Price
