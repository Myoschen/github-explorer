import {RepositoryList} from '@/components/repository';
import {SearchForm} from '@/components/search';
import {useEffect} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';

function SearchPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');

  const onSubmit = (value: string) => {
    setSearchParams({q: value});
  };

  useEffect(() => {
    if (!query) navigate('/');
  }, [navigate, query]);

  if (!query) return null;

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-0">
      <SearchForm defaultValue={query} onSubmit={onSubmit} />
      <RepositoryList query={query} />
    </main>
  );
}

export default SearchPage;
