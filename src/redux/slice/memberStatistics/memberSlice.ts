import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { getMemberAPI } from './memberAPI';

//typescript 型別
interface MemberState {
  member: any[];
  loading: boolean;
  error: string | undefined;
}

const initialState: MemberState = {
  member: [],
  loading: false,
  error: undefined,
};

export const memberSlice = createSlice({
  name: 'memberCount',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMemberAsync.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getMemberAsync.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.member = action.payload;
      })
      .addCase(getMemberAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const getMemberAsync = createAsyncThunk('member/getMember', async () => {
  try {
    const res = await getMemberAPI.memberStatistic();
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return isRejectedWithValue(error);
  }
});
export const {} = memberSlice.actions;
export default memberSlice.reducer;
