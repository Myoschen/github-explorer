import { Outlet } from 'react-router-dom'
import { GitHubLogoIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Label } from '@radix-ui/react-label'

import ScrollToTop from '@/components/scroll-to-top'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { useTheme } from '@/stores/theme'

export default function Layout() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={'relative min-h-screen w-full'}>
      <Outlet />
      <div className={'absolute right-4 top-4'}>
        <div className={'flex items-center gap-x-2'}>
          <Label htmlFor={'theme'}><SunIcon /></Label>
          <Switch
            id={'theme'}
            checked={theme === 'dark'}
            onCheckedChange={toggleTheme}
          />
          <Label htmlFor={'theme'}><MoonIcon /></Label>
        </div>
      </div>
      <div className={'absolute left-4 top-4'}>
        <Button variant={'outline'} asChild={true} size={'sm'}>
          <a href={'https://github.com/Myoschen/github-explorer'} target={'_parent'} rel={'noreferrer'}>
            <GitHubLogoIcon className={'mr-2'} />
            <span>{'Github'}</span>
          </a>
        </Button>
      </div>
      <ScrollToTop />
    </div>
  )
}
