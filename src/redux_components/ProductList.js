import React, { Component } from "react";
import { connect } from "react-redux";

class ProductList extends Component {
  renderList = () => {
    const { productList, handleProductDetail, handleAddProduct } = this.props;
    return productList.map((item, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <div className="card">
            <img className="card-img-top" src={item.linhAnh} />
            <div className="card-body">
              <h4 className="card-title">{item.tenSP}</h4>
              <button
                className="btn btn-success"
                onClick={() => {
                  handleProductDetail(item);
                }}
              >
                Chi tiết
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  handleAddProduct(item);
                }}
              >
                Thêm giỏ hàng
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.shoppingCartReducer.productList,
  };
};

export default connect(mapStateToProps, null)(ProductList);
