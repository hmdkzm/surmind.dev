import { Keyword } from '../types'
interface Topics {
  [index: string]: string[]
}
export const topics: Topics = {
  greeting: [],
}

export const keywords: Keyword = {
  greeting: {
    g0: ['hi', 'hello', 'hey'],
    g1: ['what is up', 'sup', 'whats up'],
    g2: ['how are you', 'how you doing', 'hows it going'],
    g3: ['what are you up to', 'doing anything'],
    nope: ['nothing', 'bye', 'stop'],
  },
}
