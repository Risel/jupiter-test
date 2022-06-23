import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as _ from "lodash";
import { IProduct } from "../../types/product";
import { mockProducts } from "../../mock/products";

type InitialType = {
  products: IProduct[];
  filteredProducts: IProduct[];
  currentFilter: string;
  showItems: number;
};

const initialState: InitialType = {
  products: mockProducts,
  filteredProducts: [],
  currentFilter: "Show All",
  showItems: 9,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts(state, action: PayloadAction<string>) {
      state.currentFilter = action.payload;
      if (state.currentFilter === "Show All") {
        state.filteredProducts = [...state.products];
      } else {
        state.filteredProducts = state.products.filter(
          (product) => product.category === action.payload
        );
      }
    },

    toggleActive(state, action: PayloadAction<string>) {
      const currentFileOriginal = state.products.filter(
        (product) => product.id === action.payload
      );

      const currentFileFiltered = state.filteredProducts.filter(
        (product) => product.id === action.payload
      );

      if (currentFileOriginal && currentFileFiltered) {
        currentFileOriginal[0].active = !currentFileOriginal[0].active;
        currentFileFiltered[0].active = !currentFileFiltered[0].active;
      }
    },

    deleteProducts(state) {
      const selectedArray = state.filteredProducts.filter(
        (product) => product.active === true
      );

      state.products = _.without(state.filteredProducts, ...selectedArray);
      state.filteredProducts = _.without(
        state.filteredProducts,
        ...selectedArray
      );
    },

    loadMore(state, action: PayloadAction<number>) {
      state.showItems += action.payload;
    },
  },
});

export const { filterProducts, toggleActive, deleteProducts, loadMore } = productsSlice.actions;
export default productsSlice;
