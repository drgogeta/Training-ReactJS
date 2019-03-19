import React from 'react'
import PropTypes from 'prop-types'

class SearchForm extends React.Component {

  filterValueChanged = (e) => {
    return this.props.filterValueChanged(e.target.value)
  }

  stockOnlyValueChanged = () => {
    return this.props.stockOnlyValueChanged()
  }

  render () {
    return (
      <div>
        <form>
          <input
            value={this.props.filterText}
            type="text"
            placeholder="Search Text"
            onChange={this.filterValueChanged}
          />
          <br />
          <input
            checked={this.props.isStockOnly}
            type="checkbox"
            onChange={this.stockOnlyValueChanged}
          />Only show products in stock
        </form>
      </div>
    )

  }
}

SearchForm.propTypes = {
  filterText: PropTypes.string.isRequired,
  isStockOnly: PropTypes.bool.isRequired,
  filterValueChanged: PropTypes.func.isRequired,
  stockOnlyValueChanged: PropTypes.func.isRequired
}

export default SearchForm
