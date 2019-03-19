import React, { Component } from 'react'
import { fetchProducts } from './services/products'


import FilterableProductTable from './components/FilterableProductTable.js'
import Modal from "./components/dialog/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsRes: {
        products: [],
        errMess: null,
        isLoading: true
      },
      product: {
        category: '',
        price: '',
        stocked: false,
        name: ''
      }
    }
  }

  componentDidMount() {
    this.fetchProducts()
  }

  fetchProducts = async () => {
    const response = await fetchProducts()

    const productsRes = (response.error) ? {
      products: [],
      errMess: response.message,
      isLoading: false
    } : {
      products: response,
      errMess: null,
      isLoading: false
    }

    this.setState({ productsRes })
  }

  handleChangeName = (e) => {
    this.setState(prevState => ({
        product: {
          ...prevState.product,
          name: e
        }
      })
    );
  }

  handleChangePrice = (e) => {
    this.setState(prevState => ({
        product: {
          ...prevState.product,
          price: e
        }
      })
    );
  }

  handleChangeCategory = (e) => {
    this.setState(prevState => ({
        product: {
          ...prevState.product,
          category: e
        }
      })
    );
  }

  addProduct = product => {
    const products = this.state.productsRes.products.push(product);
    this.setState({products})
  }

  render() {
    const {product} = this.state;
    return (
      <div className="App">
        <FilterableProductTable {...this.state.productsRes}/>
        <Modal
          product={product}
          addProduct={this.addProduct}
          handleChangeName={this.handleChangeName}
          handleChangePrice={this.handleChangePrice}
          handleChangeCategory={this.handleChangeCategory}
        />
      </div>
    );
  }
}

export default App;
