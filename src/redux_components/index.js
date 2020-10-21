import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "./Modal";
import ProductList from "./ProductList";

class Home extends Component {
  // productList = [
  //   {
  //     tenSP: "VinSmart Live",
  //     maSP: 1,
  //     giaThanh: 9000000,
  //     manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
  //     linhAnh: "./img/vsphone.jpg",
  //     heDieuHanh: "Android 9.0 (Pie)",
  //     camTruoc: "20 MP",
  //     camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
  //     ram: "4 GB",
  //     rom: "64GB",
  //   },
  //   {
  //     tenSP: "Meizu 16Xs",
  //     maSP: 2,
  //     giaThanh: 7000000,
  //     manHinh: `AMOLED, 6.2", Full HD+`,
  //     linhAnh: "./img/meizuphone.jpg",
  //     heDieuHanh: "Android 9.0 (Pie)",
  //     camTruoc: "20 MP",
  //     camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
  //     ram: "4 GB",
  //     rom: "64GB",
  //   },
  //   {
  //     tenSP: "Iphone XS Max",
  //     maSP: 3,
  //     giaThanh: 20000000,
  //     manHinh: `OLED, 6.5", 1242 x 2688 Pixels`,
  //     linhAnh: "./img/applephone.jpg",
  //     heDieuHanh: "iOS 14.0",
  //     camTruoc: "20 MP",
  //     camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
  //     ram: "4 GB",
  //     rom: "64GB",
  //   },
  // ];
  state = {
    // productDetail: {
    //   tenSP: "VinSmart Live",
    //   maSP: 1,
    //   manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
    //   linhAnh: "./img/vsphone.jpg",
    //   heDieuHanh: "Android 9.0 (Pie)",
    //   camTruoc: "20 MP",
    //   camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    //   ram: "4 GB",
    //   rom: "64GB",
    // },
    // cartList: [],
  };
  // handleProductDetail = (product) => {
  //   const index = this.productList.findIndex((item) => {
  //     return item.maSP === product.maSP;
  //   });
  //   this.setState({
  //     productDetail: this.productList[index],
  //   });
  // };
  // handleAddProduct = (product) => {
  //   let cartList = [...this.state.cartList];
  //   const index = cartList.findIndex((item) => {
  //     return item.maSP === product.maSP;
  //   });
  //   if (index !== -1) {
  //     cartList[index].soLuong++;
  //   } else {
  //     product.soLuong = 1;
  //     cartList = [...cartList, product];
  //   }

  //   this.setState({
  //     cartList,
  //   });
  // };
  renderShoppingCart = () => {
    return this.props.cartList.reduce((sum, item) => {
      return (sum += item.soLuong);
    }, 0);
  };
  handleDelete = (product) => {
    let cartList = this.state.cartList.filter((item) => {
      return item.maSP !== product.maSP;
    });
    this.setState({
      cartList,
    });
  };
  handleChangeAmount = (product, status) => {
    let cartList = [...this.state.cartList];
    const index = cartList.findIndex((item) => {
      return item.maSP === product.maSP;
    });
    if (status) {
      cartList[index].soLuong++;
    } else {
      cartList[index].soLuong--;
    }

    this.setState({
      cartList,
    });
  };

  render() {
    return (
      <div>
        <section className="container">
          <h3 className="title text-center">Bài tập giỏ hàng</h3>
          <div className="container text-center my-2">
            <button
              className="btn btn-danger "
              data-toggle="modal"
              data-target="#modelId"
            >
              Giỏ hàng ({this.renderShoppingCart()})
            </button>
          </div>
          <div className="container danh-sach-san-pham">
            <div className="row">
              <ProductList
                // productList={this.productList}
                // handleProductDetail={this.handleProductDetail}
                handleAddProduct={this.handleAddProduct}
              />
            </div>
          </div>
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <Modal
              handleDelete={this.handleDelete}
              handleChangeAmount={this.handleChangeAmount}
            />
          </div>
          <div className="row">
            <div className="col-sm-5">
              <img
                className="img-fluid"
                src={this.props.productDetail.linhAnh}
              />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.props.productDetail.tenSP}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{this.props.productDetail.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{this.props.productDetail.camTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{this.props.productDetail.camSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{this.props.productDetail.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{this.props.productDetail.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productDetail: state.shoppingCartReducer.productDetail,
    cartList: state.shoppingCartReducer.cartList,
  };
};

export default connect(mapStateToProps)(Home);
