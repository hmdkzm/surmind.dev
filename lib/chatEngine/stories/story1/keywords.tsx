import { Keyword } from '../types'

interface Topics {
  [index: string]: string[]
}

export const topics: Topics = {
  greeting: [],
  skills: [],
  experience: [],
  contact: [],
}

export const keywords: Keyword = {
  greeting: {
    g0: ['hi', 'hello', 'hey there', 'hi there', 'yo'],
    g1: [
      'what is up',
      'sup',
      'whats up',
      'how is it going',
      'how are you doing',
    ],
    g2: [
      'who are you',
      'what is this website',
      'tell me about yourself',
      'what do you do',
    ],
    nope: ['nothing', 'bye', 'stop', 'goodbye', 'quit'],
  },
  skills: {
    s0: [
      'what is your frontend stack',
      'what frontend tools do you use',
      'do you know react',
      'tell me about your frontend skills',
    ],
    s1: [
      'what is your backend stack',
      'what databases do you use',
      'do you know supabase',
      'tell me about your backend skills',
    ],
    s2: [
      'what are your skills',
      'what skills do you have',
      'what is your tech stack',
      'what technologies do you know',
      'what languages do you speak',
    ],
  },
  experience: {
    e0: [
      'what have you built',
      'show me your projects',
      'what projects have you done',
      'show me your portfolio apps',
    ],
    e1: [
      'what is your experience',
      'tell me about your work history',
      'where have you worked',
      'can i see your resume',
      'show me your background',
    ],
  },
  contact: {
    c0: [
      'how can i contact you',
      'how to hire you',
      'what is your email',
      'give me your linkedin',
      'where is your github',
    ],
    c1: [
      'are you available for work',
      'are you looking for a job',
      'do you do freelance',
      'are you open to remote work',
    ],
  },
}
