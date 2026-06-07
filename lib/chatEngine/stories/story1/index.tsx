import { keywords, topics } from './keywords'
import { Plot, Scene, Story, Topic } from '../types'

const greeting: Topic = {
  name: 'greeting',
  acts: () => {
    return {
      g0: {
        answers: [
          'Hi there! Welcome to my interactive portfolio. What would you like to know?',
        ],
      },
      g1: {
        answers: [
          'Doing great and excited to show you around! Ask me about my skills or projects.',
        ],
      },
      g2: {
        answers: [
          "I'm an interactive bot representing a passionate software engineer. Type 'skills' or 'experience' to learn more!",
        ],
      },
      nope: {
        answers: [
          'Thanks for stopping by! Feel free to refresh if you want to chat again.',
        ],
      },
    }
  },
}

const skills: Topic = {
  name: 'skills',
  acts: () => {
    return {
      s0: {
        answers: [
          'On the frontend, I specialize in React, Next.js, and TypeScript to build fast, type-safe web applications.',
        ],
      },
      s1: {
        answers: [
          'For the backend, I lean heavily into scalable tools like Node.js and Supabase for databases, authentication, and real-time features.',
        ],
      },
      s2: {
        answers: [
          'My core stack includes Next.js, TypeScript, and Supabase. I love combining them to rapidly ship robust, full-stack applications.',
        ],
      },
    }
  },
}

const experience: Topic = {
  name: 'experience',
  acts: () => {
    return {
      e0: {
        answers: [
          "I've built several full-stack applications! Highlights include this chat simulator, an e-commerce optimization tool, and various SaaS MVPs. Check my GitHub link in the contact section!",
        ],
      },
      e1: {
        answers: [
          'I have experience working across the stack in agile environments, transforming complex design wireframes into production-ready web apps. Ask me for my contact info to see my full resume!',
        ],
      },
    }
  },
}

const contact: Topic = {
  name: 'contact',
  acts: () => {
    return {
      c0: {
        answers: [
          'You can reach me via email at your-email@example.com or connect with me on GitHub and LinkedIn. Let’s build something together!',
        ],
      },
      c1: {
        answers: [
          "I am currently open to full-time remote roles and exciting freelance contracts. Let's get in touch to discuss details.",
        ],
      },
    }
  },
}

const scene1: Scene = {
  name: 'scene one',
  // Included all the newly defined topics into the active scene
  topics: [greeting, skills, experience, contact],
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
