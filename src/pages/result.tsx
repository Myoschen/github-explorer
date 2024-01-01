import { useEffect, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Loader2Icon } from 'lucide-react'

import Repository from '@/components/repository'
import SearchInput from '@/components/search-input'
import useInfiniteRepositories from '@/hooks/use-infinite-repositories'

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
}

export default function ResultPage() {
  const triggerRef = useRef(null)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  const shouldRedirect = query === null || query.length === 0
  const { hasMore, nextPage, repositories } = useInfiniteRepositories(query)

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0]
      if (entry.isIntersecting) nextPage()
    }
    const observer = new IntersectionObserver(callback, options)
    if (triggerRef.current) {
      observer.observe(triggerRef.current)
    }
    return () => observer.disconnect()
  }, [nextPage])

  useEffect(() => {
    if (shouldRedirect) {
      navigate('/')
    }
  }, [navigate, shouldRedirect])

  if (shouldRedirect) return null

  return (
    <main className={'mx-auto max-w-3xl px-4 py-16 md:px-0'}>
      <SearchInput />
      <div className={'mt-8 grid gap-4 sm:grid-cols-2'}>
        {repositories.length > 0 && (
          repositories.map(repository => (
            <Repository
              key={repository.id}
              ownerName={repository.owner?.name}
              avatar={repository.owner?.avatar_url}
              ownerUrl={repository.owner?.html_url}
              name={repository.full_name}
              description={repository.description ?? 'This repository has no description.'}
              repoUrl={repository.svn_url}
              forks={repository.forks_count}
              stargazers={repository.stargazers_count}
              issues={repository.open_issues_count}
            />
          ))
        )}
      </div>
      {hasMore && (
        <div ref={triggerRef} className={'flex items-center justify-center py-8'}>
          <Loader2Icon className={'animate-spin'} />
        </div>
      )}
    </main>
  )
}
