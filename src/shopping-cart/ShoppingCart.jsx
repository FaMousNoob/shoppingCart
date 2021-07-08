import React, { Component } from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import ModalCart from './ModalCart';

class ShoppingCart extends Component {
  prodList = [
    {
      id: 1,
      ten: 'Meizu 16Xs',
      manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP &amp; Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '6 BG',
      hinhAnh: './img/meizuphone.jpg',
    },
    {
      id: 2,
      ten: `VinSmart Live`,
      manHinh: '	AMOLED, 6.2", Full HD+',
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP &amp; Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '6 BG',
      hinhAnh: './img/vsphone.jpg',
    },
    {
      id: 3,
      ten: 'Iphone XS Max',
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '6 BG',
      hinhAnh: './img/applephone.jpg',
    },
  ];

  prodDetail = {
    id: 1,
    ten: 'Meizu 16Xs',
    manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
    heDieuHanh: 'Android 9.0 (Pie)',
    cameraTruoc: '20 MP',
    cameraSau: 'Chính 48 MP &amp; Phụ 8 MP, 5 MP',
    ram: '4 GB',
    rom: '6 BG',
    hinhAnh: './img/meizuphone.jpg',
  };

  changeDetail = (prodDetail) => {
    this.setState({
      prodDetail,
    });
  };

  render() {
    return (
      <div>
        <section className='container'>
          <h3 className='title text-center'>Bài tập giỏ hàng</h3>
          <div className='container text-center my-2'>
            <button
              className='btn btn-danger '
              data-toggle='modal'
              data-target='#modelId'>
              Giỏ hàng (0)
            </button>
          </div>
          <ProductList prodList={this.prodList} />
          <ModalCart />
          <ProductDetail prodDetail={this.prodDetail} />
        </section>
      </div>
    );
  }
}

export default ShoppingCart;
