import { CircleDotIcon, GitForkIcon, StarIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCount } from '@/lib/utils'

interface RepositoryProps {
  // owner
  ownerName: string | null | undefined
  avatar: string | undefined
  ownerUrl: string | undefined

  // repo
  name: string
  description: string
  repoUrl: string
  forks: number
  stargazers: number
  issues: number
}

export default function Repository({ ownerName, avatar, ownerUrl, name, description, repoUrl, forks, stargazers, issues }: RepositoryProps) {
  return (
    <Card>
      <CardHeader>
        <div className={'flex items-center gap-x-2'}>
          <a href={ownerUrl} target={'_blank'} rel={'noreferer'}>
            <Avatar className={'transition-opacity hover:opacity-50'}>
              <AvatarImage src={avatar} />
              <AvatarFallback>{ownerName?.charAt(0)}</AvatarFallback>
            </Avatar>
          </a>
          <a className={'min-w-0'} title={name} href={repoUrl} target={'_blank'} rel={'noreferer'}>
            <CardTitle className={'truncate text-lg hover:underline'}>{name}</CardTitle>
          </a>
        </div>
      </CardHeader>
      <CardContent>
        <div className={'flex flex-col gap-y-6'}>
          <p className={'line-clamp-3 basis-[72px]'}>{description}</p>
          <div className={'flex items-center justify-between'}>
            <div className={'text-center'}>
              <span className={'flex items-center gap-x-1'}>
                <GitForkIcon className={'size-4'} />
                {'Forks'}
              </span>
              <div className={'text-xl font-medium md:text-3xl'}>
                {forks > 1000 ? `${formatCount(forks)}k` : forks}
              </div>
            </div>
            <div className={'text-center'}>
              <span className={'flex items-center gap-x-1'}>
                <CircleDotIcon className={'size-4'} />
                {'Issues'}
              </span>
              <div className={'text-xl font-medium md:text-3xl'}>
                {issues > 1000 ? `${formatCount(issues)}k` : issues}
              </div>
            </div>
            <div className={'text-center'}>
              <span className={'flex items-center gap-x-1'}>
                <StarIcon className={'size-4'} />
                {'Stars'}
              </span>
              <div className={'text-xl font-medium md:text-3xl'}>
                {stargazers > 1000 ? `${formatCount(stargazers)}k` : stargazers}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
