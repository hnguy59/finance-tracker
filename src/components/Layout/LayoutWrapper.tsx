import { AnimatePresence } from 'framer-motion'
import { FC, ReactElement, ReactNode, useCallback } from 'react'
import Navbar from 'components/Navbar'
import useTheme from '~/utils/hooks/useTheme'
import * as Styles from './Layout.styles'
import { useRouter } from 'next/router'

interface LayoutWrapperProps {
  children: ReactElement
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const { themeProps } = useTheme()
  const router = useRouter()

  const year = new Date().getFullYear()

  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
  }

  const handleExitCompleteAnimatePresence = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 })
    }
  }, [])

  return (
    <Styles.Layout>
      <Styles.Header>
        <Navbar />
      </Styles.Header>
      <Styles.Body {...themeProps}>
        <AnimatePresence
          mode="wait"
          initial
          onExitComplete={handleExitCompleteAnimatePresence}
          key={router.pathname}
        >
          <Styles.ContentContainer
            key={router.pathname}
            initial={{ opacity: 0, x: 0, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -0, y: 20 }}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            style={{ position: 'relative' }}
          >
            {children}
          </Styles.ContentContainer>
        </AnimatePresence>
      </Styles.Body>
      <Styles.Footer>
        <Styles.FooterContent {...themeProps}>
          © {year} Henry Nguyen. All Rights Reserved.
        </Styles.FooterContent>
      </Styles.Footer>
    </Styles.Layout>
  )
}

export default LayoutWrapper
