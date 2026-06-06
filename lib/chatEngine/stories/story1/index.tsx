import { keywords, topics } from './keywords'
import { Plot, Scene, Story, Topic } from '../types'

const greeting: Topic = {
  name: 'greeting',
  acts: () => {
    return {
      g0: {
        answers: ['Hi there'],
      },
      g1: {
        answers: ['Doing great'],
      },
      g2: {
        answers: ['Been better'],
      },
      g3: {
        answers: ['Nothing special'],
      },
      nope: {
        answers: ['Actualy got nothing to say'],
      },
    }
  },
}
const scene1: Scene = {
  name: 'scene one',
  topics: [greeting],
}
const plot1: Plot = {
  name: 'plot one',
  scenes: [scene1],
}
export const story: Story = {
  name: 'First Edition',
  entry: ['plot one', 'scene one', 'greeting'],
  entryPrompts: [
    {
      prompt: 'hi there',
    },
  ],
  plots: [plot1],
}
export { keywords, topics }
