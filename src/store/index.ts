import { configureStore, createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: { filter: 'all' },
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    filterReducer: filterSlice.reducer,
  },
});

export const { filter } = filterSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
