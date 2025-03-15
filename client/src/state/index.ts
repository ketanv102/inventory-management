import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: InitialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    SetIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    SetIsDarkmode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    }
  }
})

export const { SetIsSidebarCollapsed, SetIsDarkmode } = globalSlice.actions;

export default globalSlice.reducer;