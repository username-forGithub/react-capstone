import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = 'https://financialmodelingprep.com/api/v3/dowjones_constituent?apikey=51d48d4a8f5d7e94807064f29ce5b36b';
export const fetchStocks = createAsyncThunk(
  'stocks/fetchStocks',
  async () => {
    const response = await fetch(API);
    const dataold = await response.json();
    const data = dataold.map((item) => ({ ...item, views: 0 }));
    return data;
  },
);

const incr = (num) => num + 1;

const dataSlice = createSlice({
  name: 'stocks',
  initialState: {
    stocks: [],
    status: 'idle',
    error: null,
  },

  reducers: {
    update: (state, action) => ({
      ...state,
      stocks: [
        ...state.stocks.map((item) => (
          (item.name !== action.payload) ? item : {
            ...item,
            views: incr(item.views),
          }
        )),
      ],
    }),
  },

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
export { incr };
export const { update } = dataSlice.actions;
export default dataSlice;
