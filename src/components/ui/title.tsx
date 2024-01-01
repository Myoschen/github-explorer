import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

interface Props {
  text: string
  styles?: string
}

function Title({ text, styles }: Props) {
  return (
    <motion.h1
      className={cn(
        'font-heading text-6xl font-semibold md:leading-relaxed',
        styles,
      )}
      initial={'hidden'}
      animate={'visible'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { ease: 'easeOut', duration: 0.4, delay: 0.15 },
        },
      }}
    >
      {text}
    </motion.h1>
  )
}

export default Title
