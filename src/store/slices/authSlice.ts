import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TUser = {
  id: string;
  login: string;
  email: string;
};

export type TUserState = {
  user: TUser | null;
  isAuth: boolean;
  loading: boolean;
  error?: string;
};

export const authReducer = createSlice({
  name: 'auth',
  initialState: {} as TUserState,
  reducers: {
    start(state) {
      state.loading = true;
    },
    success(state, action: PayloadAction<TUser>) {
      state.user = action.payload;
      state.loading = false;
    },
    failure(state) {
      state.loading = false;
      state.error = 'Unable to fetch user';
    },
  },
});

export default authReducer.reducer;
