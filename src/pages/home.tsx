import { motion } from 'framer-motion'

import SearchInput from '@/components/search-input'

export default function HomePage() {
  return (
    <main className={'mx-auto max-w-3xl px-4 pt-40 md:px-0'}>
      <motion.h1
        className={'mb-8 text-center text-6xl font-semibold md:mb-4 md:leading-relaxed'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {'Github Explorer'}
      </motion.h1>
      <SearchInput />
    </main>
  )
}
