import { useCallback, useEffect, useRef } from 'react'
import RepositoryCard from './repository-card'

import useInfiniteRepositories from '@/hooks/use-infinite-repositories'

interface Props {
  query: string
}

function RepositoryList({ query }: Props) {
  const { hasMore, nextPage, repositories } = useInfiniteRepositories(query)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const lastElementRef = useRef<HTMLDivElement>(null)

  const onIntersection: IntersectionObserverCallback = useCallback(
    (entries, observer) => {
      const firstEntry = entries[0]
      if (firstEntry.isIntersecting) {
        nextPage()
      }
    },
    [nextPage],
  )

  useEffect(() => {
    observerRef.current = new IntersectionObserver(onIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    })
    if (lastElementRef.current && observerRef.current) {
      observerRef.current.observe(lastElementRef.current)
    }
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [onIntersection])

  return (
    <div className={'mt-8 grid gap-4 sm:grid-cols-2'}>
      {repositories.length > 0
        ? repositories.map(repository => (
          <RepositoryCard
            key={repository.id}
            id={repository.id}
            name={repository.name}
            fullName={repository.full_name}
            avatar={repository.owner.avatar_url}
            description={
                repository.description ?? 'This repository has no description.'
              }
            forks={repository.forks_count}
            stargazers={repository.stargazers_count}
            issues={repository.open_issues_count}
          />
        ))
        : null}
      {hasMore
        ? (
          <div
            className={'text-center font-heading text-xl sm:col-span-2'}
            ref={lastElementRef}
          >
            {'more...'}
          </div>
          )
        : null}
    </div>
  )
}

export default RepositoryList
