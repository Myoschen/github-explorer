import type { ClassValue } from 'clsx'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export function formatCount(count: number) {
  return Math.floor(count / 1000)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
