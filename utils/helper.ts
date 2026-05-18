import { customAlphabet } from 'nanoid'
import { breakpoints } from './consts'

export const getMediaQuery = {
  up: (key: keyof typeof breakpoints) =>
    `@media (min-width: ${breakpoints[key]}px)`,
  down: (key: keyof typeof breakpoints) =>
    `@media (max-width: ${breakpoints[key] - 0.05}px)`,
}

export const genId = () => {
  const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 8)
  return nanoid()
}

export const randomNumber = (min: number, max: number) => {
  return Math.ceil(Math.random() * (max - min) + min)
}
