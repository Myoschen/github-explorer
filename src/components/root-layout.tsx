import { Outlet } from 'react-router-dom'
import {
  GitHubLogoIcon,
  IdCardIcon,
  MoonIcon,
  SunIcon,
} from '@radix-ui/react-icons'

import ScrollToTop from '@/components/scroll-to-top'
import { Button } from '@/components/ui'
import Switch from '@/components/ui/switch'
import { useTheme } from '@/stores/theme'

export default function RootLayout() {
  const { theme, setTheme } = useTheme()

  return (
    <div className={'relative min-h-screen w-full bg-gray12 text-gray2 transition-colors dark:bg-gray3 dark:text-gray12'}>
      <Outlet />
      <div className={'absolute right-4 top-4'}>
        <Switch
          id={'dark-mode'}
          leftIcon={<SunIcon />}
          rightIcon={<MoonIcon />}
          checked={theme === 'dark'}
          onCheckedChange={checked =>
            checked ? setTheme('dark') : setTheme('light')}
        />
      </div>
      <div className={'absolute left-4 top-4 inline-flex items-center gap-x-2'}>
        <Button
          icon={<GitHubLogoIcon />}
          text={'Github'}
          onClick={() => {
            window.open(
              'https://github.com/Myoschen/github-explorer',
              '_blank',
              'noreferrer,noopener',
            )
          }}
        />
        <Button
          icon={<IdCardIcon />}
          text={'Portfolio'}
          onClick={() => {
            window.open(
              'https://ryan-chen-portfolio.vercel.app/',
              '_blank',
              'noreferrer,noopener',
            )
          }}
        />
      </div>
      <ScrollToTop />
    </div>
  )
}
