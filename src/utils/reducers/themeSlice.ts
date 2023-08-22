import { createSlice } from '@reduxjs/toolkit'
import { Theme } from 'utils/helpers/theme.helpers'

interface ThemeState {
  value: Theme
}

const initialState = { value: Theme.LIGHT } as ThemeState

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, value) {
      switch (value.payload) {
        case Theme.LIGHT:
          state.value = Theme.LIGHT
          break
        case Theme.DARK:
          state.value = Theme.DARK
          break
      }
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
