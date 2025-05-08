// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productSlics';  // Example product reducer
import categoryReducer from './slices/categorySlice';  // Example category reducer
import cartReducer from './slices/cartSlice'

// Create the store using configureStore instead of createStore
const store = configureStore({
    reducer: {
      products: productsReducer,
      categories: categoryReducer,
      cart: cartReducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;  // Type for the RootState
  export type AppDispatch = typeof store.dispatch;  // Type for AppDispatch
  
  export default store;  // Export the store