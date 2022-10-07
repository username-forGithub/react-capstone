import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './slices/dataSlice';

const Store = configureStore({
  reducer: {
    allData: dataSlice.reducer,
  },
});

export default Store;
