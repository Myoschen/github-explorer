import {useCallback, useEffect, useRef} from 'react';
import useInfiniteRepositories from '@/hooks/use-infinite-repositories';
import RepositoryCard from './repository-card';

interface Props {
  query: string;
}

function RepositoryList({query}: Props) {
  const {hasMore, nextPage, repositories} = useInfiniteRepositories(query);
  const lastElementRef = useRef<HTMLDivElement>(null);

  const onIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
        nextPage();
      }
    },
    [nextPage]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });
    if (lastElementRef.current && hasMore)
      observer.observe(lastElementRef.current);
    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {repositories.length > 0
        ? repositories.map((repository) => (
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
      {hasMore ? (
        <div
          className="text-center font-heading text-xl sm:col-span-2"
          ref={lastElementRef}
        >
          more...
        </div>
      ) : null}
    </div>
  );
}

export default RepositoryList;
