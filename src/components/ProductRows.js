import React from 'react';
import PropTypes from 'prop-types';

const ProductRows = props => {
  const {name, price} = props.product;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

ProductRows.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  })
}

export default ProductRows
