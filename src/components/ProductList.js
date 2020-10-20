import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  renderList = () => {
    return this.props.productList.map((item) => {
      return <Product product={item} />;
    });
  };

  render() {
    return <div className="row">{this.renderList()}</div>;
  }
}
