import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import styles from './ProductRow.css';

const StyledSpan = styled.span`
  color: red;
`

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <StyledSpan>
        {product.name}
      </StyledSpan>;

    return (
      <TableRow>
        <TableCell component="td" scope="row">
          <div className={styles.name}>{name}</div>
        </TableCell>
        <TableCell numeric>
          <div className={styles.price}>{product.price}</div>
        </TableCell>
      </TableRow>
    );
  }
}

export default ProductRow