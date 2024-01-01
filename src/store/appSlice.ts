import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store/index'

// Define a type for the slice state
interface AppState {
  primaryTheme?: string
}

// Define the initial state using that type
const initialState: AppState = {
  primaryTheme: '',
}

export const counterSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changePrimaryTheme: (state) => {
      state.primaryTheme = 'red'
    },
  },
})

export const { changePrimaryTheme } = counterSlice.actions

export const selectPrimaryTheme = (state: RootState) => state.app.primaryTheme

export default counterSlice.reducer