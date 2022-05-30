import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  data: {},
};

const { actions, reducer } = createSlice({
  name: 'Loading',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.data = {
        ...state.data,
        ...payload,
      };
    },
  },
});

export const { setLoading } = actions;
export default reducer;
