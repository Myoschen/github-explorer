// reference: https://juejin.cn/post/7096417857394704398
import { useCallback, useEffect, useState } from 'react'
import { Button } from './ui'
import { ArrowUpIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const handler = useCallback(() => {
    if (!document.scrollingElement) return
    const { scrollTop, clientHeight } = document.scrollingElement
    if (scrollTop > clientHeight) {
      setIsVisible(true)
    }
    else {
      setIsVisible(false)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    document.addEventListener('scroll', handler)
    return () => document.removeEventListener('scroll', handler)
  }, [handler])

  return (
    <AnimatePresence>
      {isVisible
        ? (
          <motion.div
            className={'fixed bottom-4 right-4'}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            variants={{
              hidden: {
                opacity: 0,
                transition: { ease: 'easeOut', duration: 0.3 },
              },
              visible: {
                opacity: 1,
                transition: { ease: 'easeIn', duration: 0.1 },
              },
            }}
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
export default ScrollToTopButton
