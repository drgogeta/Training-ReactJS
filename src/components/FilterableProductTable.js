import React, {Component} from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import Modal from "./dialog/Modal";

class FilterableProductTable extends Component {
  render () {
    return (
      <div>
        <div>
          <h4>PRODUCT SEARCH APP</h4>
        </div>
        <SearchBar />
        <br />
        <ProductTable />
        <Modal/>
      </div>
    )
  }
}

export default FilterableProductTable
