import { BuddyParams, Mood } from '../types'

export interface Keyword {
  [index: string]: {
    [index: string]: string[]
  }
}
export interface Story {
  name: string
  entry: string[]
  entryPrompts: Prompt[]
  plots: Plot[]
}
export interface Plot {
  name: string
  scenes: Scene[]
}
export interface Scene {
  name: string
  topics: Topic[]
}
export interface Topic {
  name: string
  acts: Acts
}
export interface Conditions {
  locked?: true
  premium?: true
  mood?: Mood
  feel?: number
  temper?: number
}
export interface Prompt {
  prompt: string
  topic?: string
  conditions?: Conditions
}
export interface Action {
  command: string
  operation: 'add' | 'sub' | 'set'
  key: 'feel' | 'temper'
  value: number
}
export type Acts = (p: BuddyParams) => Act
export interface Act {
  [index: string]: {
    type?: string
    actions?: Action[]
    toPlot?: string
    toScene?: string
    toTopic?: string
    answers: string[]
    prompts?: Prompt[]
    conditions?: Conditions
  }
}
