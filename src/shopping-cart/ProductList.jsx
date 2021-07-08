import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  renderProductList = () => {
    const { prodList, changeProdDetail } = this.props;
    return prodList.map((prod, index) => (
      <div className='col-sm-4' key={index}>
        <Product prod={prod} changeDetail={changeProdDetail} />
      </div>
    ));
  };

  render() {
    return (
      <div className='container danh-sach-san-pham'>
        <div className='row'>{this.renderProductList()}</div>
      </div>
    );
  }
}

export default ProductList;
