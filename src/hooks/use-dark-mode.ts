import {useEffect} from 'react';
import useLocalStorage from './use-local-storage';
import usePrevious from './use-previous';

function useDarkMode() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const previousTheme = usePrevious(theme);

  useEffect(() => {
    const body = document.documentElement;
    if (previousTheme) {
      body.classList.remove(previousTheme);
    }
    body.classList.add(theme);
  }, [theme]);

  return [theme, setTheme] as const;
}

export default useDarkMode;
