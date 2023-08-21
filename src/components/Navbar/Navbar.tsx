import portrait from 'data/images/portrait.jpeg'
import { navigateTo } from '~/utils/helpers/navigate.helpers'
import { navbarItems } from '~/utils/helpers/routes.helpers'
import { Theme } from '~/utils/helpers/theme.helpers'
import { FC, useCallback, useState } from 'react'
import { To, useLocation, useNavigate } from 'react-router-dom'
import useTheme from '~/utils/hooks/useTheme'
import { useAppDispatch } from '~/utils/reducers'
import { setTheme } from '~/utils/reducers/themeSlice'
import * as Styles from './Navbar.styles'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { theme, themeProps } = useTheme()
  const dispatch = useAppDispatch()
  const [isMouseEnterNavTitle, setIsMouseEnterNavTitle] = useState(false)

  const handleMouseEnterNavTitle = () => setIsMouseEnterNavTitle(true)
  const handleMouseLeaveNavTitle = () => setIsMouseEnterNavTitle(false)

  const handleClickNav = useCallback(
    (url: To): void => {
      navigateTo(url, navigate)
    },
    [navigate]
  )

  const handleChangeTheme = useCallback(
    (checked: boolean): void => {
      const selectTheme = checked ? Theme.DARK : Theme.LIGHT
      dispatch(setTheme(selectTheme))
    },
    [dispatch]
  )

  return (
    <Styles.Navbar>
      <Styles.NavbarContainer>
        <Styles.NavTitle
          onClick={() => handleClickNav('/' as To)}
          onMouseEnter={handleMouseEnterNavTitle}
          onMouseLeave={handleMouseLeaveNavTitle}
          {...themeProps}
        >
          <Styles.NavAvatar
            src={portrait}
            isMouseEnterNavTitle={isMouseEnterNavTitle}
            {...themeProps}
          />
          Henry Nguyen
        </Styles.NavTitle>
        <Styles.NavMenu>
          {navbarItems.map((navbarItem) => (
            <Styles.NavItem key={navbarItem.title}>
              <Styles.NavLink
                onClick={() => handleClickNav(navbarItem.path)}
                isActive={location.pathname === navbarItem.path}
                {...themeProps}
              >
                {navbarItem.title}
              </Styles.NavLink>
            </Styles.NavItem>
          ))}
        </Styles.NavMenu>
        <Styles.NavSwitch>
          <Styles.ThemeSwitch
            checked={theme === Theme.DARK}
            onChange={(e, checked) => handleChangeTheme(checked)}
            {...themeProps}
          />
        </Styles.NavSwitch>
      </Styles.NavbarContainer>
    </Styles.Navbar>
  )
}

export default Navbar
