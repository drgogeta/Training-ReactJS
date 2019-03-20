import React from 'react';
import PropTypes from 'prop-types';

import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import TextField from "@material-ui/core/es/TextField/TextField";
import Select from "@material-ui/core/es/Select/Select";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Button from "@material-ui/core/es/Button/Button";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";

class ModalForm extends React.Component {

  closeDialog = () => {
    return this.props.closeDialog()
  }

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
        <DialogTitle id="form-dialog-title">
          ADD A PRODUCT
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill the data requested in this dialog to add aproduct to our table <br/>
            including Product Name, Price and Category.
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            type='text'
            label='Product Name'
            value={this.props.product.name}
            onChange={this.handleChangeName}/>
          <br/>
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            type='number'
            label='Price'
            value={this.props.product.price}
            onChange={this.handleChangePrice}/>
          <br/>
          <Select
            value={this.props.product.category}
            onChange={this.handleChangeCategory}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em> Category </em>
            </MenuItem>
            <MenuItem value="Add A Product">Add A Product</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Sporting Goods">Sporting Goods</MenuItem>
          </Select>
        </DialogContent>

        <DialogActions>
          <Button color="primary" onClick={this.closeDialog}>CANCEL</Button>
          <Button color="primary" onClick={this.addProduct}>ADD</Button>
        </DialogActions>
      </div>
    )
  }

}

ModalForm.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleChangePrice: PropTypes.func.isRequired,
  handleChangeCategory: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired
};

export default ModalForm;
