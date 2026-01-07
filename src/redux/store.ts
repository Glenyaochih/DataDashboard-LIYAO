import { configureStore } from '@reduxjs/toolkit';
import memberReducer from './slice/memberStatistics/memberSlice';
import invoiceReducer from './slice/dailyInvoice/invoiceSlice';

export const store = configureStore({
  reducer: {
    memberStatistic: memberReducer,
    dailyInvoice: invoiceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// 這裡的 dispatch 會被推斷為基礎型別：Dispatch<AnyAction>
// 它只接受「純物件」格式的 Action (例如 { type: '...' })
// 當你丟入 AsyncThunk (非同步函式) 時，TypeScript 會因為型別不匹配而報錯const dispatch = useDispatch();
