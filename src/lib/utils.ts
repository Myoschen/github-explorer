import type { ClassValue } from 'clsx'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export function formatCount(count: number) {
  return Math.floor(count / 1000)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function throttle<T extends unknown[]>(callback: (...args: T) => void, delay = 500) {
  let wait = false
  return (...args: T) => {
    if (wait) return
    wait = true
    setTimeout(() => {
      callback(...args)
      wait = false
    }, delay)
  }
}
