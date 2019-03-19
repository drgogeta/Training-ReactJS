import React from 'react'
import PropTypes from 'prop-types'

const ProductsCategoryRow = props => {
  return (
    <tr>
      <td colSpan={2}><strong>{props.name}</strong></td>
    </tr>
  )
}

ProductsCategoryRow.propTypes = {
  name: PropTypes.string.isRequired
}

export default ProductsCategoryRow
