import { useEffect, useState } from 'react'
import { ArrowUpIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/ui'
import { throttle } from '@/lib/utils'

export default function ScrollToTop() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const updatePosition = throttle(() => {
      setScrollPosition(window.scrollY)
    })
    window.addEventListener('scroll', updatePosition)
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return (
    <AnimatePresence>
      {scrollPosition > 100
        ? (
          <motion.div
            className={'fixed bottom-4 right-4'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Button
              icon={<ArrowUpIcon />}
              className={'p-2'}
              type={'button'}
              onClick={scrollToTop}
            />
          </motion.div>
          )
        : null}
    </AnimatePresence>
  )
}
