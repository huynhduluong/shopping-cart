import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteProduct } from "../redux/actions";

class CardItem extends Component {
  render() {
    const { product, handleDelete, handleChangeAmount } = this.props;
    return (
      <tr className="card-item">
        <td>{product.maSP}</td>
        <td>{product.tenSP}</td>
        <td>
          <img src={product.linkAnh} width={50} />
        </td>
        <td>
          <button
            onClick={() => {
              handleChangeAmount(product, false);
            }}
          >
            -
          </button>
          {product.soLuong}
          <button
            onClick={() => {
              handleChangeAmount(product, true);
            }}
          >
            +
          </button>
        </td>
        <td>{product.giaThanh}</td>
        <td>{product.giaThanh * product.soLuong}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              handleDelete(product);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (product) => {
      dispatch(actDeleteProduct(product));
    },
  };
};

export default connect(null, mapDispatchToProps)(CardItem);
