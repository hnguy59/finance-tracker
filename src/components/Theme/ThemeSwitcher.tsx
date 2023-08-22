import { DarkMode, LightMode } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Theme } from 'utils/helpers/theme.helpers'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function handleClickThemeSwitch() {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  if (theme === Theme.DARK) {
    return (
      <IconButton onClick={handleClickThemeSwitch} color="warning">
        <LightMode />
      </IconButton>
    )
  }

  if (theme === Theme.LIGHT) {
    return (
      <IconButton onClick={handleClickThemeSwitch} color="secondary">
        <DarkMode />
      </IconButton>
    )
  }

  return null
}
