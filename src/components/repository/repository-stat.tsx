import { useMemo } from 'react'
import { ChatBubbleIcon, CopyIcon, StarIcon } from '@radix-ui/react-icons'

import { formatCount } from '@/lib/utils'

interface Props {
  type: 'fork' | 'issue' | 'star'
  text: string
  count: number
}

function RepositoryStat({ type, text, count }: Props) {
  let icon
  switch (type) {
    case 'fork':
      icon = <CopyIcon />
      break
    case 'issue':
      icon = <ChatBubbleIcon />
      break
    case 'star':
      icon = <StarIcon />
      break
  }

  const formattingCount = useMemo(() => {
    if (count >= 1000) {
      return `${formatCount(count)}k`
    }
    return `${count}`
  }, [count])

  return (
    <div className={'text-center'}>
      <span className={'flex items-center gap-x-1 font-paragraph'}>
        {icon}
        {text}
      </span>
      <div className={'font-heading text-xl font-medium md:text-3xl'}>
        {formattingCount}
      </div>
    </div>
  )
}
export default RepositoryStat
