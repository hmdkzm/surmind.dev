import { TerminalTheme } from '@/lib/store/terminalSlice'

export const theme: { [index: string]: Partial<TerminalTheme> } = {
  blackice: {
    inputBackgroundColor: 'rgba(0,0,0,0.35)',
    inputTextColor: 'black',
    logBackgroundImage: '',
    logBackgroundColor: 'darkgrey',
    logTextColor: 'black',
    caretColor: 'black',
  },
  bloody: {
    inputBackgroundColor: 'rgba(255, 0, 0, 0.5)',
    inputTextColor: 'rgb(255, 255, 255)',
    logBackgroundColor: 'rgba(255, 255, 255, 0.8)',
    logTextColor: 'red',
    caretColor: 'white',
  },
  bloodyhell: {
    inputBackgroundColor: 'rgba(120,10,10,0.5)',
    inputTextColor: 'rgb(182, 182, 182)',
    logBackgroundColor: 'rgba(25,0,0,0.8)',
    logTextColor: 'red',
    caretColor: 'red',
  },
  matcha: {
    inputBackgroundColor: 'rgba(250,250,250,0.5)',
    inputTextColor: 'white',
    logBackgroundColor: 'rgba(50, 100, 80, 0.5)',
    logTextColor: '#00b700',
    caretColor: 'white',
  },
  cyberpunk: {
    inputBackgroundColor: 'rgba(255, 0, 255, 0.2)',
    inputTextColor: '#00ff00',
    logBackgroundColor: 'rgba(0, 0, 0, 0.8)',
    logTextColor: '#f0f',
    caretColor: '#0ff',
  },
  ocean: {
    inputBackgroundColor: 'rgba(0, 105, 148, 0.5)',
    inputTextColor: '#e0ffff',
    logBackgroundColor: 'rgba(0, 43, 54, 0.8)',
    logTextColor: '#839496',
    caretColor: '#e0ffff',
  },
  matrix: {
    inputBackgroundColor: 'black',
    inputTextColor: '#00FF41',
    logBackgroundColor: 'rgba(0, 0, 0, 0.8)',
    logTextColor: '#008F11',
    caretColor: '#00FF41',
  },
  dracula: {
    inputBackgroundColor: '#44475a',
    inputTextColor: '#f8f8f2',
    logBackgroundColor: 'rgba(40, 42, 54, 0.8)',
    logTextColor: '#bd93f9',
    caretColor: '#f8f8f2',
  },
  sunset: {
    inputBackgroundColor: 'rgba(255, 83, 73, 0.4)',
    inputTextColor: '#ffd700',
    logBackgroundColor: 'rgba(45, 20, 44, 0.8)',
    logTextColor: '#ee4540',
    caretColor: '#ffd700',
  },
}
