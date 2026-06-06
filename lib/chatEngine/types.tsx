export type Mode = 'story' | 'free'
export type Mood =
  | 'talky'
  | 'flirty'
  | 'sensitive'
  | 'climax'
  | 'annoyed'
  | 'angry'
export interface BuddyParams {
  feel: number
  temper: number
  mood: Mood
}
export interface Message {
  t: string
  d: boolean
  s: string
}
