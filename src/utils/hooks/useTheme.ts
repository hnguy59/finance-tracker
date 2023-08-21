import { Theme, ThemeProps } from '~/utils/helpers/theme.helpers'
import { useAppSelector } from '~/utils/reducers'

interface UseTheme {
  theme: Theme
  themeProps: ThemeProps
}

const useTheme = (): UseTheme => {
  const theme = useAppSelector((state) => state.theme.value)
  const themeProps = { theme: theme }

  return { theme, themeProps }
}

export default useTheme
