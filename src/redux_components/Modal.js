import React, { Component } from "react";
import { connect } from "react-redux";
import CardItem from "./CardItem";

class Modal extends Component {
  renderProduct = () => {
    return this.props.cartList.map((item) => {
      return (
        <CardItem
          key={item.maSP}
          product={item}
          // handleDelete={this.props.handleDelete}
          // handleChangeAmount={this.props.handleChangeAmount}
        />
      );
    });
  };

  render() {
    return (
      <div className="modal-dialog" role="document" style={{ maxWidth: 1000 }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Giỏ hàng</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã sản phẩm</th>
                  <th>tên sản phẩm</th>
                  <th>hình ảnh</th>
                  <th>số lượng</th>
                  <th>đơn giá</th>
                  <th>thành tiền</th>
                </tr>
              </thead>
              <tbody>{this.renderProduct()}</tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartList: state.shoppingCartReducer.cartList,
  };
};

export default connect(mapStateToProps)(Modal);
