import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
  reducer: { product: productsSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
