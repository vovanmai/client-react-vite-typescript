import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store/index'

// Define a type for the slice state
interface AppState {
  primaryTheme?: string,
  appName: string,
  appShortName: string,
}

// Define the initial state using that type
const initialState: AppState = {
  primaryTheme: '',
  appName: 'Mana4.0888',
  appShortName: 'M4.0',
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

export const appName = (state: RootState) => state.app.appName
export const appShortName = (state: RootState) => state.app.appShortName

export default counterSlice.reducer