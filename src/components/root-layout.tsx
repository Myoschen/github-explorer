import {Outlet} from 'react-router-dom';
import Switch from './ui/switch';
import {
  GitHubLogoIcon,
  IdCardIcon,
  MoonIcon,
  SunIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import useDarkMode from '@/hooks/use-dark-mode';
import {Button} from './ui';

function RootLayout() {
  const [theme, setTheme] = useDarkMode();

  return (
    <div className="relative min-h-screen w-full bg-gray12 text-gray2 dark:bg-gray3 dark:text-gray12">
      <Outlet />
      <div className="absolute right-4 top-4">
        <Switch
          id="dark-mode"
          leftIcon={<SunIcon />}
          rightIcon={<MoonIcon />}
          checked={theme === 'dark'}
          onCheckedChange={(checked) =>
            checked ? setTheme('dark') : setTheme('light')
          }
        />
      </div>
      <div className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-x-2 md:left-auto md:right-4 md:translate-x-0">
        <Button
          icon={<GitHubLogoIcon />}
          text="Github"
          onClick={() => {
            window.open(
              'https://github.com/Myoschen/github-explorer',
              '_blank',
              'noreferrer,noopener'
            );
          }}
        />
        <Button
          icon={<IdCardIcon />}
          text="Portfolio"
          onClick={() => {
            window.open(
              'https://ryan-chen-portfolio.vercel.app/',
              '_blank',
              'noreferrer,noopener'
            );
          }}
        />
        <Button
          icon={<TwitterLogoIcon />}
          text="MyosChen"
          onClick={() => {
            window.open(
              'http://twitter.com/MyosChen',
              '_blank',
              'noreferrer,noopener'
            );
          }}
        />
      </div>
    </div>
  );
}
export default RootLayout;
