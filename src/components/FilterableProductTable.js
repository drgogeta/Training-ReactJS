import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchBar from './SearchBar'
import ProductsTable from './ProductsTable'
import logo from '../logo.svg';


const styles = {
  card: {
    minWidth: 400,
    borderRadius: 20,
    backgroundColor: '#eae5fd'
  },
  title: {
    color: '#585373'
  }
};

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    // Example to show bind options
    // this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <div style={{height: '100px', display: 'flex', alignItems: 'center'}}>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography component="h4" variant="h4" className={classes.title}>
              <i>SEARCHABLE PRODUCT TABLE</i> 
            </Typography>
          </div>
          <SearchBar 
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <ProductsTable {...this.getProductsTableProps()} />
        </CardContent>
      </Card>
    )
  }

  handleFilterTextChange = (e) => {
    const filterText = e.target.value
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange () {
    this.setState({
      inStockOnly: !this.state.inStockOnly
    })
  }

  getProductsTableProps = () => {
    return {
      filterText: this.state.filterText,
      inStockOnly: this.state.inStockOnly,
      productsRes: this.props.productsRes
    }
  }
}

export default withStyles(styles)(FilterableProductTable);

