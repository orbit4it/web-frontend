import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<any>) => {
      state.accessToken = action.payload;
    },
    logOut: (state) => {
      state.accessToken = null;
    },
  },
});

export const { setAccessToken, logOut } = authSlice.actions;

export default authSlice.reducer;
