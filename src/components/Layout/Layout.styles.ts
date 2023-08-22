import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { getFontColor, ThemeProps } from 'utils/helpers/theme.helpers'

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  min-height: 56px;
`

export const Body = styled.div<ThemeProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  color: ${({ theme }) => getFontColor(theme)};
`

export const ContentContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  margin: auto;
  position: relative;
`

export const Footer = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: center;
`

export const FooterContent = styled.div<ThemeProps>`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  align-self: center;
  justify-content: center;
  color: ${({ theme }) => getFontColor(theme)};
`
