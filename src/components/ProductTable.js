import React from 'react'

import ProductsCategoryRow from './ProductsCategoryRow'
import ProductRows from './ProductRows'

const ProductsTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductsCategoryRow />
          <ProductRows />
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable
