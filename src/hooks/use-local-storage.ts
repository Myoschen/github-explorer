import {useState, useEffect, useCallback} from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const readValue = useCallback(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  }, [key, initialValue]);
  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = useCallback((value: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    setStoredValue(readValue());
  }, []);

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
