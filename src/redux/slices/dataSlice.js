import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = 'https://financialmodelingprep.com/api/v3/dowjones_constituent?apikey=51d48d4a8f5d7e94807064f29ce5b36b';
export const fetchStocks = createAsyncThunk(
  'stocks/fetchStocks',
  async () => {
    const response = await fetch(API);
    const data = await response.json();
    // console.log(data);
    // const newdata = data.map((item) => ({ ...item, reserved: false }));
    return data;
  },
);

const dataSlice = createSlice({
  name: 'stocks',
  initialState: {
    stocks: [],
    status: 'idle',
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchStocks.fulfilled, (state, action) => ({
        ...state,
        stocks: action.payload,
        status: 'succeeded',
      }))
      .addCase(fetchStocks.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchStocks.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default dataSlice;
