import { useNavigate } from 'react-router-dom'

import { SearchForm } from '@/components/search'
import Title from '@/components/ui/title'

function HomePage() {
  const navigate = useNavigate()

  const onSubmit = (value: string) => {
    navigate(`/search?q=${value}`)
  }

  return (
    <main className={'mx-auto max-w-3xl px-4 pt-40 md:px-0'}>
      <Title text={'Github Explorer'} styles={'text-center mb-8 md:mb-4'} />
      <SearchForm onSubmit={onSubmit} />
    </main>
  )
}

export default HomePage
