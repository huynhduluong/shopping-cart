import React, { Component } from "react";
import ProductList from "./ProductList";

export default class Home extends Component {
  productList = [
    {
      tenSP: "VinSmart Live",
      maSP: 1,
      manHinh: `AMOLED, FHD+ 2232 x 1080 pixels`,
      linhAnh: "./img/vsphone.jpg",
      heDieuHanh: "Android 9.0 (Pie)",
      camTruoc: "20 MP",
      camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64GB",
    },
    {
      tenSP: "Meizu 16Xs",
      maSP: 2,
      manHinh: `AMOLED, 6.2", Full HD+`,
      linhAnh: "./img/meizuphone.jpg",
      heDieuHanh: "Android 9.0 (Pie)",
      camTruoc: "20 MP",
      camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64GB",
    },
    {
      tenSP: "Iphone XS Max",
      maSP: 3,
      manHinh: `OLED, 6.5", 1242 x 2688 Pixels`,
      linhAnh: "./img/applephone.jpg",
      heDieuHanh: "iOS 14.0",
      camTruoc: "20 MP",
      camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64GB",
    },
  ];
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
              Giỏ hàng (0)
            </button>
          </div>
          <div className="container danh-sach-san-pham">
            <div className="row">
              <ProductList productList={this.productList} />
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
            <div
              className="modal-dialog"
              role="document"
              style={{ maxWidth: 1000 }}
            >
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
                    <tbody />
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
          </div>
          <div className="row">
            <div className="col-sm-5">
              <img className="img-fluid" src="./img/meizuphone.jpg" alt />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>AMOLED, FHD+ 2232 x 1080 pixels</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>Android 9.0 (Pie)</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>20 MP</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>Chính 48 MP &amp; Phụ 8 MP, 5 MP</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>4 GB</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>6 GB</td>
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
