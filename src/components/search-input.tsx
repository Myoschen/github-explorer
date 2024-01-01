import { type ChangeEvent, type KeyboardEvent, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRightIcon, SearchIcon, XIcon } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export default function SearchInput() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') ?? '')
  const hasQuery = query.length > 0

  const search = () => {
    if (query.length > 0) {
      const params = new URLSearchParams({ q: query })
      navigate(`/result?${params}`)
    }
    else {
      navigate('/')
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)
  const handleClean = () => setQuery('')
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      search()
    }
  }

  return (
    <motion.div className={'relative'} layoutId={'search-input'}>
      <div className={'absolute left-2 top-1/2 -translate-y-1/2'}>
        <SearchIcon className={'size-5'} />
      </div>
      <Input
        className={'pl-8 pr-14'}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className={cn('absolute right-8 top-1/2 -translate-y-1/2 scale-0 transition-opacity hover:opacity-50', hasQuery && 'scale-100')}
        onClick={handleClean}
      >
        <XIcon className={'size-5'} />
      </button>
      <button
        className={cn('absolute right-2 top-1/2 -translate-y-1/2 scale-0 transition-opacity hover:opacity-50', hasQuery && 'scale-100')}
        onClick={search}
      >
        <ArrowRightIcon className={'size-5'} />
      </button>
    </motion.div>
  )
}
