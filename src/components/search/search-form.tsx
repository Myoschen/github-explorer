import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import SearchInput from './search-input'

interface Props {
  defaultValue?: string
  onSubmit: (value: string) => void
}

function SearchForm({ defaultValue = '', onSubmit }: Props) {
  const [query, setQuery] = useState(defaultValue)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (query.trim().length > 0) {
      onSubmit(query.trim())
    }
  }

  const handleQueryChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value)
  }
  const handleQueryReset = () => {
    setQuery('')
  }

  return (
    <form className={'sticky top-4 z-10'} onSubmit={handleSubmit}>
      <SearchInput
        value={query}
        onChange={handleQueryChange}
        onReset={handleQueryReset}
      />
    </form>
  )
}

export default SearchForm
