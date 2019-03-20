import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import styled from 'styled-components'

const StyledTableCell = styled(TableCell)`
  letter-spacing: 8px !important;
  font-weight: bold !important;
  font-size: 16px !important;
  background-color: #d1c8f8;
  color: #585373;
`

function ProductCategoryRow (props) {
  return (
    <TableRow>
      <StyledTableCell component="td" scope="row" colSpan="2">
        {props.category}
      </StyledTableCell>
    </TableRow>
  );
}

export default ProductCategoryRow