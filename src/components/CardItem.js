import React, { Component } from "react";

export default class CardItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <tr className="card-item">
        <td>{product.maSP}</td>
        <td>{product.tenSP}</td>
        <td>
          <img src={product.linkAnh} width={50} />
        </td>
        <td>
          <button>-</button>
          {product.soLuong}
          <button>+</button>
        </td>
        <td>{product.giaThanh}</td>
        <td>{product.giaThanh*product.soLuong}</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
