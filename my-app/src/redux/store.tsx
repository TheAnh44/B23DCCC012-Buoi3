import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

// Định nghĩa RootState dựa trên store
export type RootState = ReturnType<typeof store.getState>;

// Export store để sử dụng
export default store;
