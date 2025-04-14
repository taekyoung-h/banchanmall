import React from 'react'
import '../App.css'
import CategoryProductList from '../componnet/CategoryProductList'

const Salad = () => {
  return (
    <div className='container'>
        <CategoryProductList category="salad" label='샐러드' />
    </div>
  )
}

export default Salad