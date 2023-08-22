import { AnimatePresence } from 'framer-motion'
import { ReactElement, useCallback } from 'react'
import Navbar from 'components/Navbar'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

interface LayoutWrapperProps {
  children: ReactElement
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
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
    <main className="flex flex-col bg-white dark:bg-gray-200">
      <div className="flex min-h-[56px]">
        <Navbar />
      </div>
      <div className="flex w-full max-w-[600px] p-4 m-auto relative">
        <AnimatePresence
          mode="wait"
          initial
          onExitComplete={handleExitCompleteAnimatePresence}
          key={router.pathname}
        >
          <motion.div
            key={router.pathname}
            initial={{ opacity: 0, x: 0, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -0, y: 20 }}
            transition={{ duration: 0.4, type: 'easeInOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex mt-auto justify-center">
        <div className="flex w-full max-w-[1200px] p-4 self-center justify-center">
          © {year} Henry Nguyen. All Rights Reserved.
        </div>
      </div>
    </main>
  )
}
