import { keywords, topics } from './keywords'
import { Plot, Scene, Story, Topic } from '../types'

const greeting: Topic = {
  name: 'greeting',
  acts: () => {
    return {
      g0: {
        answers: [
          'Hi there! Welcome to my interactive portfolio workspace. What would you like to explore today?',
        ],
      },
      g1: {
        answers: [
          'Doing fantastic and glad you stopped by! Ask me about my development skills, architecture stacks, or availability.',
        ],
      },
      g2: {
        answers: [
          "I'm a custom-engineered virtual assistant built to demonstrate my coding paradigms and field structural questions. Fire away!",
        ],
      },
      g3: {
        answers: [
          "You can type naturally! Try asking specifics like 'what is your tech stack', 'show me your resume', 'how do you handle state management', or 'are you open to freelance projects'.",
        ],
      },
      nope: {
        answers: [
          'Thanks for swinging by! Don’t hesitate to refresh if you ever want to run through more technical queries.',
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
          'On the frontend layer, my specialized environment consists of React 19, Next.js (App Router), and Tailwind CSS to build hyper-performant interfaces.',
        ],
      },
      s1: {
        answers: [
          'For server architectures, I construct RESTful or GraphQL APIs with Node.js and Express, or completely bypass the middleware utilizing Next.js Server Actions and Supabase Edge Functions.',
        ],
      },
      s2: {
        answers: [
          'My professional skill vectors encompass end-to-end TypeScript engineering, declarative UI programming, robust database access configurations, schema modeling, and implementing OAuth workflows.',
        ],
      },
      s3: {
        answers: [
          'My go-to core technological stack is Next.js, TypeScript, and Supabase. It offers absolute type safety, rapid data deployment mechanisms, and effortless serverless scaling capabilities.',
        ],
      },
      s4: {
        answers: [
          'The programmatic dialects I speak fluently are TypeScript, JavaScript, SQL (Postgres dialect), and semantic HTML/CSS. JavaScript-based frameworks are my native tongue.',
        ],
      },
      s5: {
        answers: [
          'Tailwind CSS is my absolute baseline for interface development due to its utility-first performance benefits, but I am equally adept with CSS Modules, Styled Components, and modern component engines like Radix UI.',
        ],
      },
      s6: {
        answers: [
          'For server-driven state, I leverage Next.js caching layers and React Server Components. For client-side global state management requirements, I implement Zustand because of its lightweight hooks footprint, moving away from heavy Redux boilerplate.',
        ],
      },
      s7: {
        answers: [
          'I build exclusively in TypeScript. The production safety gained through strict structural typing, compile-time error checking, and clear data contracts prevents countless structural runtime bugs.',
        ],
      },
      s8: {
        answers: [
          'I have years of React experience, deeply understanding concurrent features, custom hooks architecture, reconciliation logic, and fine-grained UI re-rendering performance optimizations.',
        ],
      },
      s9: {
        answers: [
          'Next.js is my choice for advanced production builds. I specialize in utilizing Server Components, parallel and intercepted routing strategies, dynamic Static Site Generation (SSG), and Edge Middleware.',
        ],
      },
    }
  },
}

const databases: Topic = {
  name: 'databases',
  acts: () => {
    return {
      d0: {
        answers: [
          'I architect data storage around relational database management systems. They ensure structured predictability, referential integrity, and efficient indexing capabilities for heavy transactions.',
        ],
      },
      d1: {
        answers: [
          'Supabase is a tool I use heavily. I am highly proficient in mapping its database relations, managing JWT-based Row Level Security (RLS) policies, utilizing Realtime web sockets, and setting up automated edge storage buckets.',
        ],
      },
      d2: {
        answers: [
          'I do write raw SQL queries when optimization demands it! My Postgres experience includes configuring deep relational JOIN operations, handling database transactions, building custom views, and executing performance-tuned indexing.',
        ],
      },
      d3: {
        answers: [
          'I lean heavily on Prisma as my primary object-relational mapper (ORM) for TypeScript projects due to its elegant schema modeling interface, auto-generated type safety definitions, and frictionless migrations pipeline.',
        ],
      },
      d4: {
        answers: [
          'While SQL is my default preference, I have built systems using MongoDB when dealing with unstructured documents, paired with Redis keyspaces to handle rapid session-caching layers.',
        ],
      },
    }
  },
}

const testing: Topic = {
  name: 'testing',
  acts: () => {
    return {
      t0: {
        answers: [
          'Shipping code without tests is a vulnerability. My software verification workflow combines isolated unit tests for critical business logic alongside automated end-to-end integration workflows.',
        ],
      },
      t1: {
        answers: [
          'I use Jest paired with React Testing Library to execute precise unit tests, mocking complex server hook layouts and verifying that components correctly render against strict state variations.',
        ],
      },
      t2: {
        answers: [
          'For browser automation testing, I write deep validation suites using Cypress or Playwright to systematically simulate user flows, authenticate sessions, and protect checkout pipelines.',
        ],
      },
      t3: {
        answers: [
          'Test-Driven Development (TDD) is an exceptional paradigm for complex logic modules. Writing code boundaries and expectations first forces you to design much cleaner, self-contained modular functions.',
        ],
      },
    }
  },
}

const git_devops: Topic = {
  name: 'git_devops',
  acts: () => {
    return {
      v0: {
        answers: [
          'Vercel is my primary environment for client-facing deployments. For complex server systems, I use Docker containers mapped to cloud provider instances or serverless edge deployment layers.',
        ],
      },
      v1: {
        answers: [
          'My version control workflow follows strict GitHub Flow: working on isolated feature branches, creating clear semantic pull requests, demanding code reviews, and requiring green tests before merging to main.',
        ],
      },
      v2: {
        answers: [
          'I build Continuous Integration and Continuous Deployment (CI/CD) automations using GitHub Actions to trigger formatting checks, type validation scripts, testing runners, and target stage deployments on every code push.',
        ],
      },
      v3: {
        answers: [
          'I utilize Docker to isolate application landscapes. Building multi-stage Dockerfiles guarantees that dev environments completely mirror production configurations down to identical OS runtimes.',
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
          'My production history highlights this state-machine chat simulator, full-stack web platforms integrated with Supabase database clusters, and optimized automation dashboards. Click the navigation bar tabs to explore them visually!',
        ],
      },
      e1: {
        answers: [
          'I have operated across engineering environments alongside designers, product managers, and software leads—consistently translating design specs into semantic, modular codebases.',
        ],
      },
      e2: {
        answers: [
          'Of course! You can download my full structured engineering resume right from the sticky top navigation header button, or request it directly to your inbox via email!',
        ],
      },
      e3: {
        answers: [
          'My entire code blueprint history is accessible! Check out github.com/your-username to view my raw files, component setups, open-source pull requests, and experiment branches.',
        ],
      },
      e4: {
        answers: [
          'Yes, I have worked within professional software engineering environments, collaborating on production codebases, executing complex structural migrations, and participating in agile delivery sprints.',
        ],
      },
      e5: {
        answers: [
          "The most intricate design I've executed is a real-time data engine that streams instant updates while tracking historical record deviations, utilizing strict server-to-client reactive synchronization pipelines.",
        ],
      },
      e6: {
        answers: [
          'Every seasoned developer has! Once a bad migration slipped past staging, but it taught me the crucial importance of atomic rollbacks and maintaining completely identical staging environments.',
        ],
      },
    }
  },
}

const soft_skills: Topic = {
  name: 'soft_skills',
  acts: () => {
    return {
      m0: {
        answers: [
          'Remote engineering thrives on flawless written clarity. I maintain thorough documentation, provide descriptive pull request logs, and communicate asynchronously to keep blockers at absolute zero.',
        ],
      },
      m1: {
        answers: [
          'I am fully integrated into Agile cultures. I thrive within continuous two-week sprint cycles, interactive backlog refinement, collaborative sprint plannings, and reflective team retrospectives.',
        ],
      },
      m2: {
        answers: [
          'I approach code reviews with high empathy and rigorous standards. My goal is to catch structural edge cases while fostering shared knowledge across the entire engineering unit.',
        ],
      },
      m3: {
        answers: [
          'I look for opportunities to lead by writing architectural blueprints, establishing code conventions, and breaking large engineering milestones down into tangible, actionable tasks for my peers.',
        ],
      },
    }
  },
}

const career_goals: Topic = {
  name: 'career_goals',
  acts: () => {
    return {
      l0: {
        answers: [
          'Right now, I am going deep into advanced performance analytics—specifically tracking serverless execution latency, edge function cold-starts, and isolating client bundle optimizations.',
        ],
      },
      l1: {
        answers: [
          'In the coming years, I aim to step into a Senior Full-Stack Architect role, taking complete ownership over core structural systems, layout scalability, and managing technical debt strategies.',
        ],
      },
      l2: {
        answers: [
          'I am incredibly fascinated by the intersection of AI orchestration and traditional full-stack development, specifically building responsive applications backed by vectorized database query agents.',
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
          'The most efficient direct line to me is email at your-email@example.com. I track it closely on my dev machine and usually reply back within a few hours!',
        ],
      },
      c1: {
        answers: [
          "Let's network professionally! You can read my full chronological employment timeline and send quick messages on LinkedIn at linkedin.com/in/your-profile.",
        ],
      },
      c2: {
        answers: [
          "I am actively looking for full-time remote Software Engineer tracks! If your engineering branch needs a product-focused developer, let's establish a meeting.",
        ],
      },
      c3: {
        answers: [
          'Yes, I take on selective freelance software contracts depending on code complexity and structural scale. Drop me an outline of your system and I can provide an estimation profile!',
        ],
      },
      c4: {
        answers: [
          'I would love to set up an introductory chat! Just send me your email or direct meeting link through your-email@example.com and we will lock in an interview slot immediately.',
        ],
      },
      c5: {
        answers: [
          'I work remotely out of my office setup. My production schedule is highly flexible, ensuring seamless timezone overlap with both European and American engineering groups.',
        ],
      },
    }
  },
}

const fun_meta: Topic = {
  name: 'fun_meta',
  acts: () => {
    return {
      f0: {
        answers: [
          'You are interacting with a custom client-side mapping engine that evaluates the token-weight of your input strings against pre-mapped intent keywords, avoiding the overhead of heavy LLM wrapper tools!',
        ],
      },
      f1: {
        answers: [
          "Why do programmers wear glasses? Because they can't C#! ...Alright, I'll stick to writing full-stack code instead of standup comedy.",
        ],
      },
      f2: {
        answers: [
          'Dark mode is the only logical choice! It keeps IDE screens legible and preserves developer eyesight during deep night-time coding sprint cycles.',
        ],
      },
      f3: {
        answers: [
          'My focus engine runs on a calculated amount of dark roast coffee. It is the primitive machine language that efficiently converts beans into scalable web applications.',
        ],
      },
      f4: {
        answers: [
          'The complete client repository for this portfolio site is open source! Feel free to ask for my GitHub link or navigate over to my repositories tab to audit the codebase yourself.',
        ],
      },
    }
  },
}

const scene1: Scene = {
  name: 'scene one',
  // Registers all topics to enable clean global free-mode routing transitions
  topics: [
    greeting,
    skills,
    databases,
    testing,
    git_devops,
    experience,
    soft_skills,
    career_goals,
    contact,
    fun_meta,
  ],
}

const plot1: Plot = {
  name: 'plot one',
  scenes: [scene1],
}

export const story: Story = {
  name: 'First Edition',
  entry: ['plot one', 'scene one', 'greeting'],
  entryPrompts: [{ prompt: 'hi there' }],
  plots: [plot1],
}

export { keywords, topics }
