import * as stories from '../stories'
import { Action, Prompt } from '../stories/types'
import { BuddyParams, Mode } from '../types'

const { story, keywords, topics } = stories['surmind']

export const getKey = (
  str: string,
  topic: string,
  mode: Mode,
  forcedTopic: string | undefined,
) => {
  console.log(mode)
  const words = str.replaceAll('', '')
  let matchedKey = 'nope'
  console.log('ft', forcedTopic)
  const _topic =
    forcedTopic || (mode === 'free' && getTopic(words)) || topic || 'greeting'
  console.log(_topic)
  const keywordsTopicKeys = shuffle(Object.keys(keywords[_topic]), 0)
  matchedKey = weighing(keywordsTopicKeys, keywords[_topic], words) || 'nope'
  return { _topic, matchedKey }
}
const weighing = (
  keys: string[],
  keywords: { [index: string]: string[] },
  words: string,
) => {
  const matchWeigh = keys.map((key) => {
    const keys = keywords[key].map((keyword) => {
      return keyword.split(' ').reduce((a, b) => {
        if (words.includes(b)) return a + 1
        return a
      }, 0)
    })
    return keys
  })
  const maxWeight = matchWeigh.map((w) =>
    w.reduce((a, b) => (b > a ? b : a), 0),
  )
  const maxWeightIndex = maxWeight.reduce(
    (a, b, i) => (b > a.v ? (a = { v: b, i: i }) : a),
    { v: 0, i: 0 },
  )
  const matchedKey = maxWeightIndex.v > 0 ? keys[maxWeightIndex.i] : undefined
  console.log(matchWeigh)
  console.log(maxWeight)
  console.log(maxWeightIndex)
  return matchedKey
}

export const getTopic = (str: string) => {
  const wheighedTopic = weighing(Object.keys(topics), topics, str)
  console.log('WT', wheighedTopic)
  return wheighedTopic
}

export const getAnswers = (
  message: string,
  topic: string | undefined,
  params: BuddyParams,
  entry: string[],
  mode: Mode,
) => {
  let [plotName, sceneName, topicName] = entry
  let _params = params
  console.log(topicName)
  const { _topic, matchedKey } = getKey(message, topicName, mode, topic)
  console.log(matchedKey)
  const [actTopic] = story.plots
    .filter((p) => p.name === plotName)[0]
    .scenes.filter((s) => s.name === sceneName)[0]
    .topics.filter((a) => a.name === _topic)
  const mem = actTopic.acts(params)[matchedKey]
  plotName = mem?.toPlot || plotName
  sceneName = mem?.toScene || sceneName
  topicName = mem?.toTopic || _topic
  _params = performActions(mem?.actions || [], _params)
  _params.mood = populateMood(_params.mood, _params)
  _params.feel = populateFeel(_params)
  mem.prompts = populatePrompts(_params, mem.prompts)
  return {
    mem,
    topic: _topic,
    params: _params,
    entry: [plotName, sceneName, topicName],
  }
}
const populateFeel = ({ feel, temper, mood }: BuddyParams) => {
  let newFeel = feel
  if (mood === 'angry') newFeel = feel - Math.floor(temper / 20)
  else if (mood === 'annoyed') newFeel = feel - Math.floor(temper / 40)
  return newFeel < 0 ? 0 : newFeel
}
const performActions = (actions: Action[], params: BuddyParams) => {
  let _params = params
  actions?.forEach((action) => {
    const { command, key, operation, value } = action
    switch (command) {
      case 'update':
        switch (operation) {
          case 'add': {
            const newValue = _params[key] + value
            _params = {
              ..._params,
              [key]: newValue < 200 ? newValue : 200,
            }
            break
          }
          case 'sub': {
            const newValue = _params[key] - value
            _params = {
              ..._params,
              [key]: newValue > 0 ? newValue : 0,
            }
            break
          }
          case 'set': {
            _params = {
              ..._params,
              [key]: value,
            }
            break
          }
        }
    }
  })
  return _params
}
const populateMood = (
  mood: BuddyParams['mood'],
  { feel, temper }: BuddyParams,
) => {
  let newMood: BuddyParams['mood'] = mood
  switch (mood) {
    case 'talky': {
      if (temper > 135) newMood = 'angry'
      else if (temper > 70) newMood = 'annoyed'
      else if (feel === 200) newMood = 'climax'
      else if (feel > 135) newMood = 'sensitive'
      else if (feel > 70) newMood = 'flirty'
      break
    }
    case 'flirty': {
      if (temper > 135) newMood = 'angry'
      else if (temper > 70) newMood = 'annoyed'
      else if (feel === 200) newMood = 'climax'
      else if (feel > 135) newMood = 'sensitive'
      else if (feel <= 70) newMood = 'talky'
      break
    }
    case 'sensitive': {
      if (temper > 135) newMood = 'angry'
      else if (temper > 70) newMood = 'annoyed'
      else if (feel === 200) newMood = 'climax'
      else if (feel <= 70) newMood = 'talky'
      else if (feel <= 135) newMood = 'flirty'
      break
    }
    case 'annoyed': {
      if (temper > 135) newMood = 'angry'
      else if (temper <= 70) {
        if (feel === 200) newMood = 'climax'
        else if (feel > 135) newMood = 'sensitive'
        else if (feel > 70) newMood = 'flirty'
        else newMood = 'talky'
      }
      break
    }
    case 'angry': {
      if (temper <= 70) {
        if (feel === 200) newMood = 'climax'
        else if (feel > 135) newMood = 'sensitive'
        else if (feel > 70) newMood = 'flirty'
        else newMood = 'talky'
      } else if (temper <= 135) newMood = 'annoyed'
    }
  }
  return newMood
}
const populatePrompts = (
  params: BuddyParams,
  prompts: Prompt[] | undefined,
) => {
  if (prompts) {
    const _prompts = prompts.filter((p) => {
      //:D
      const isClientPremium = true
      if (p.conditions?.locked) return false
      if (p.conditions?.premium && !isClientPremium) return false
      if (p.conditions?.mood) return p.conditions.mood === params.mood
      return (
        !p.conditions ||
        ((p.conditions.feel === undefined ||
          params.feel >= p.conditions.feel) &&
          (p.conditions.temper === undefined ||
            params.temper < p.conditions.temper))
      )
    })
    return _prompts
  }
}
export const shuffle = (arr: string[], count = 2) => {
  const length = arr && arr.length
  if (!length) return arr
  let _arr = [...arr]
  for (let j = 0; j < count; j++) {
    const shuffledArray = []
    for (let i = 0; i < length; i++) {
      const randomIndex = randomNumber(0, _arr.length - 1)
      shuffledArray.push(_arr[randomIndex])
      _arr = _arr.filter((_, index) => index !== randomIndex)
    }
    _arr = [...shuffledArray]
  }
  return _arr
}

export const randomNumber = (min: number, max: number) => {
  return Math.ceil(Math.random() * (max - min) + min)
}
