import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

interface AnimateWrapperProps {
  children: ReactElement
}

export default function AnimateWrapper({ children }: AnimateWrapperProps) {
  const router = useRouter()

  return (
    <AnimatePresence>
      <motion.div
        key={router.pathname}
        initial={{ opacity: 0, x: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, type: 'easeInOut' }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
