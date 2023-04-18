import {Link} from 'react-router-dom';
import RepositoryStat from './repository-stat';

interface Props {
  id: number;
  name: string;
  fullName: string;
  avatar: string;
  description: string;
  forks: number;
  stargazers: number;
  issues: number;
}

function RepositoryCard({
  id,
  name,
  fullName,
  avatar,
  description,
  forks,
  stargazers,
  issues,
}: Props) {
  return (
    <div className="flex flex-col rounded bg-white/90 p-4 shadow-sm dark:bg-gray1/90">
      <img
        className="w-full rounded object-cover shadow-sm"
        src={avatar}
        alt="Avatar"
      />
      <div className="flex flex-1 flex-col justify-between px-2 py-3">
        <div className="mb-4 space-y-1">
          <Link to={`/repository/${id}`}>
            <h2 className="font-heading text-xl font-medium md:text-2xl">
              {name}
            </h2>
            <span className="font-heading text-sm text-gray8">{fullName}</span>
          </Link>
          <p className="line-clamp-2 font-paragraph text-sm md:text-base">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-around">
          <RepositoryStat type="star" text="stars" count={forks} />
          <RepositoryStat type="fork" text="forks" count={stargazers} />
          <RepositoryStat type="issue" text="issues" count={issues} />
        </div>
      </div>
    </div>
  );
}

export default RepositoryCard;
