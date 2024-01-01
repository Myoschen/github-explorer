import { useCallback, useEffect, useState } from 'react'
import type { Endpoints } from '@octokit/types'
import axios, { AxiosError } from 'axios'

import usePrevious from '@/hooks/use-previous'

type Response = Endpoints['GET /search/repositories']['response']['data']
type Repository = Endpoints['GET /search/repositories']['response']['data']['items'][number]

const PER_PAGE = 20

export default function useInfiniteRepositories(query: string | null) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasMore, setHasMore] = useState(false)
  const [error, setError] = useState<AxiosError | null>(null)
  const [page, setPage] = useState(1)
  const [repositories, setRepositories] = useState<Repository[]>([])
  const previousQuery = usePrevious(query)

  const fetchRepositories = useCallback(async (signal: AbortSignal) => {
    if (query === null) return
    try {
      setIsLoading(true)
      setError(null)
      const response = await axios.get<Response>(
          `https://api.github.com/search/repositories?q=${query}&per_page=${PER_PAGE}&page=${page}`,
          { signal: signal },
      )
      setRepositories(prev => [...prev, ...response.data.items])
      setHasMore(response.data.total_count - page * PER_PAGE > 0)
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error)
      }
    }
    finally {
      setIsLoading(false)
    }
  }, [query, page])

  const nextPage = useCallback(() => {
    if (hasMore) setPage(prev => prev + 1)
  }, [hasMore])

  useEffect(() => {
    if (previousQuery !== query) {
      setRepositories([])
      setPage(1)
    }
  }, [previousQuery, query])

  useEffect(() => {
    const controller = new AbortController()
    fetchRepositories(controller.signal)
    return () => controller.abort()
  }, [fetchRepositories])

  return { isLoading, hasMore, error, repositories, nextPage }
}
