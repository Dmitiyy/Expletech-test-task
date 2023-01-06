import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type TUser = {
  email: string;
  phone: string;
  fullName: string;
  id: number;
  age: number;
  country: string;
}
export interface IState {
  records: Array<TUser>
};

const initialState = {
  records: []
} as IState;

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setRecords(state, action: PayloadAction<{ data: TUser[] }>) {
      state.records = action.payload.data;
    }
  }
});

export const { setRecords } = usersSlice.actions;
export default usersSlice.reducer;