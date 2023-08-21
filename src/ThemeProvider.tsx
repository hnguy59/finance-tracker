import { createTheme, CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material'
import { baseTheme, Theme } from '~/utils/helpers/theme.helpers'
import { FC, useMemo } from 'react'
import { useAppSelector } from '~/utils/reducers'

type ThemeProps = {
  children: React.ReactNode
}

const ThemeProvider: FC<ThemeProps> = ({ children }) => {
  const theme = useAppSelector((state) => state.theme.value)

  const lightTheme = useMemo(
    () =>
      createTheme({
        ...baseTheme,
        palette: {
          background: {
            default: '#DEE4E7',
          },
        },
      }),
    []
  )

  const darkTheme = useMemo(
    () =>
      createTheme({
        ...baseTheme,
        palette: {
          background: {
            default: '#37474F',
          },
        },
      }),
    []
  )

  const selectedTheme = useMemo(() => {
    switch (theme) {
      case Theme.LIGHT:
        return lightTheme
      case Theme.DARK:
        return darkTheme
      default:
        return lightTheme
    }
  }, [darkTheme, lightTheme, theme])

  return (
    <MUIThemeProvider theme={selectedTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}

export default ThemeProvider
