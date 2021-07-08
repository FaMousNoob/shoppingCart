import React, { Component } from 'react';

class ProductList extends Component {
  renderProductList = () => {
    const { prodList } = this.props;
    return prodList.map((prod, index) => (
      <div className='col-sm-4' key={index}>
        <div className='card'>
          <img className='card-img-top' src={prod.hinhAnh} alt='' />
          <div className='card-body'>
            <h4 className='card-title'>{prod.ten}</h4>
            <button className='btn btn-success'>Chi tiết</button>
            <button className='btn btn-danger'>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className='container danh-sach-san-pham'>
        <div className='row'>
          {this.renderProductList()}
        </div>
      </div>
    );
  }
}

export default ProductList;
