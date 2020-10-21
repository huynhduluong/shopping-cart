import { ADD_PRODUCT, DETAIL_PRODUCT } from "../constant";

const initialState = {
  productList: [
    {
      tenSP: "VinSmart Live",
      maSP: 1,
      giaThanh: 9000000,
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
      giaThanh: 7000000,
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
      giaThanh: 20000000,
      manHinh: `OLED, 6.5", 1242 x 2688 Pixels`,
      linhAnh: "./img/applephone.jpg",
      heDieuHanh: "iOS 14.0",
      camTruoc: "20 MP",
      camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64GB",
    },
  ],
  productDetail: {
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
  cartList: [],
};

const shoppingCartReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case DETAIL_PRODUCT: {
      state.productDetail = actions.payload;
      return { ...state };
    }
    case ADD_PRODUCT: {
      let cartList = [...state.cartList];
      let product = actions.payload;
      const index = cartList.findIndex((item) => {
        return item.maSP === product.maSP;
      });
      if (index !== -1) {
        cartList[index].soLuong++;
      } else {
        product.soLuong = 1;
        cartList = [...cartList, product];
      }
      state.cartList = cartList;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default shoppingCartReducer;
