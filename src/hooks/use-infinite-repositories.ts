import axios, {AxiosError} from 'axios';
import {useCallback, useEffect, useState} from 'react';
import {Repositories, Repository, Search} from '@saber2pr/types-github-api';
import usePrevious from './use-previous';

const PER_PAGE = 20;

function useInfiniteRepositories(query: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [page, setPage] = useState(1);
  const [repositories, setRepositories] = useState<Repositories>([]);
  const previousQuery = usePrevious(query);

  const fetchRepositories = useCallback(
    async (signal: AbortSignal) => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.get<Search<Repository>>(
          `https://api.github.com/search/repositories?q=${query}&per_page=${PER_PAGE}&page=${page}`,
          {
            signal: signal,
          }
        );
        setRepositories((prev) => [...prev, ...response.data.items]);
        setHasMore(response.data.total_count - page * PER_PAGE > 0);
      } catch (error) {
        setRepositories([]);
        if (axios.isAxiosError(error)) {
          setError(error);
        } else {
          console.error(error);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [query, page]
  );

  const nextPage = useCallback(() => {
    if (hasMore) setPage((prev) => prev + 1);
  }, [setPage, hasMore]);

  useEffect(() => {
    if (previousQuery !== query) {
      setRepositories([]);
      setPage(1);
    }
  }, [query]);

  useEffect(() => {
    const controller = new AbortController();
    fetchRepositories(controller.signal);
    return () => controller.abort();
  }, [fetchRepositories]);

  return {isLoading, hasMore, error, nextPage, repositories};
}

export default useInfiniteRepositories;
