import './App.css';
import React, {Component} from 'react';
import {fetchProducts} from './services/products'

import ModalForm from "./components/dialog/ModalForm";
import FilterableProductTable from './components/FilterableProductTable.js'

import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/es/Modal/Modal";
import CardActions from "@material-ui/core/CardActions";
import Dialog from "@material-ui/core/es/Dialog";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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

    // Simulate an API delay to reproduce a stable loading state
    setTimeout(() => {
      this.setState({productsRes})
    }, 2000)
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
    this.setState({products});
    this.setState({open: false});
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  closeDialog = () => {
    this.setState({open: false});
  }

  render() {
    const {product, open} = this.state;
    return (
      <div className="App-wrapper">
        <FilterableProductTable {...this.getFilterableProductTableProps()}/>
        <CardActions>
          <Button size="small" onClick={this.handleOpen}>ADD PRODUCT</Button>
        </CardActions>

        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <ModalForm
            open={open}
            product={product}
            closeDialog={this.closeDialog}
            addProduct={this.addProduct}
            handleChangeName={this.handleChangeName}
            handleChangePrice={this.handleChangePrice}
            handleChangeCategory={this.handleChangeCategory}
          />
        </Dialog>
      </div>
    )
  }

  getFilterableProductTableProps() {
    return {
      productsRes: this.state.productsRes
    }
  }
}

export default App;
