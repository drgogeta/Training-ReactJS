import React, {Component} from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <input placeholder='Product Name' type='text' />
        <br/>
        <input placeholder='Price' type='number' />
        <br/>
        <select placeholder='Category'>
          <option>Add A Product</option>
          <option>Electronics</option>
          <option>Sporting Goods</option>
        </select>
        <div>
          <button>CANCEL</button>
          <button onClick={this.addProduct}>ADD</button>
        </div>
      </form>
    );
  }

  addProduct() {
    this.setState({...this.props});
  }

}

export default Form;