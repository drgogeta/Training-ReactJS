import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {

  addProduct = (e) => {
    e.preventDefault();
    return this.props.addProduct(this.props.product)
  }

  handleChangeName = (e) => {
    return this.props.handleChangeName(e.target.value)
  }

  handleChangePrice = (e) => {
    return this.props.handleChangePrice(e.target.value)
  }
  handleChangeCategory = (e) => {
    return this.props.handleChangeCategory(e.target.value)
  }

  render() {
    return (
      <div>
        <h3>ADD A PRODUCT</h3>
        <p>
          Please fill the data requested in this dialog to add aproduct to our table <br/>
          including Product Name, Price and Category.
        </p>
        <form onSubmit={this.addProduct}>
          <input type='text'
                 value={this.props.product.name}
                 onChange={this.handleChangeName}
                 placeholder='Product Name'/>
          <br />
          <input type='number'
                 value={this.props.product.price}
                 onChange={this.handleChangePrice}
                 placeholder='Price'
          />
          <br />
          <select
            placeholder='Category'
            value={this.props.product.category}
            onChange={this.handleChangeCategory}
          >
            <option>Add A Product</option>
            <option>Electronics</option>
            <option>Sporting Goods</option>
          </select>
          <div>
            <button>CANCEL</button>
            <button type='submit'>ADD</button>
          </div>
        </form>
      </div>
    )
  }

}

Modal.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleChangePrice: PropTypes.func.isRequired,
  handleChangeCategory: PropTypes.func.isRequired
};

export default Modal;
