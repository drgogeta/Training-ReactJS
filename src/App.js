import React, { Component } from 'react'
import { fetchProducts } from './services/products'


import FilterableProductTable from './components/FilterableProductTable.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsRes: {
        products: [],
        errMess: null,
        isLoading: true
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

  render() {
    return (
      <div className="App">
        <FilterableProductTable {...this.state.productsRes}/>
      </div>
    );
  }
}

export default App;
