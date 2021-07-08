import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { prod, changeProdDetail } = this.props;
    return (
      <div className='card'>
        <img className='card-img-top' src={prod.hinhAnh} alt='' />
        <div className='card-body'>
          <h4 className='card-title'>{prod.ten}</h4>
          <button
            className='btn btn-success'
            onlick={() => changeProdDetail(prod)}
          >
            Chi tiết
          </button>
          <button className='btn btn-danger'>Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}

export default Product;
