import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { getInvoiceAPI } from './invoiceAPI';

//typescript 型別
interface invoices {
  date: string;
  count: number;
}
interface invoiceState {
  invoices: invoices[];
  loading: boolean;
  error: string | undefined;
}

const initialState: invoiceState = {
  invoices: [],
  loading: false,
  error: undefined,
};

export const invoiceSlice = createSlice({
  name: 'dailyInvoice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInvoiceAsync.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getInvoiceAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.invoices = action.payload;
      })
      .addCase(getInvoiceAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const getInvoiceAsync = createAsyncThunk(
  'invoice/getInvoice',
  async () => {
    try {
      const res = await getInvoiceAPI.dailyInvoice();

      return res.data;
    } catch (error) {
      console.log(error);
      return isRejectedWithValue(error);
    }
  }
);
export const {} = invoiceSlice.actions;
export default invoiceSlice.reducer;
