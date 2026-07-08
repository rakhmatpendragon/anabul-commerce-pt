import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isCartOpen: boolean;
}

const initialState: UiState = {
  isCartOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    setCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
  },
});

export const { toggleCart, setCartOpen } = uiSlice.actions;
export default uiSlice.reducer;
