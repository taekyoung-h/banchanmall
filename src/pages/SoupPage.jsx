import React from 'react'
import '../App.css'
import CategoryProductList from '../componnet/CategoryProductList'

const SoupPage = () => {
  return (
    <div className='container'>
        <CategoryProductList category="soup" label='국 &middot; 탕 &middot; 찌개' />
    </div>
  )
}

export default SoupPage