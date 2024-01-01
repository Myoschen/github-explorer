import { useEffect, useRef } from 'react'

function usePrevious<T>(value: T) {
  const ref = useRef<T>()

  useEffect(() => {
    // only update if value changes
    ref.current = value
  }, [value])

  // return previous value (happens before update)
  return ref.current
}

export default usePrevious
