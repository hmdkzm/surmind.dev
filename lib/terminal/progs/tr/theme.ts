import { TerminalTheme } from '@/lib/store/terminalSlice'

export const theme: { [index: string]: Partial<TerminalTheme> } = {
  blackice: {
    inputBackgroundColor: 'rgba(0,0,0,0.35)',
    inputTextColor: 'black',
    logBackgroundImage: '',
    logBackgroundColor: 'darkgrey',
    logTextColor: 'black',
  },
  bloody: {
    inputBackgroundColor: 'rgba(255, 0, 0, 0.5)',
    inputTextColor: 'rgb(255, 255, 255)',
    logBackgroundColor: 'rgb(255, 255, 255)',
    logTextColor: 'red',
  },
  bloodyhell: {
    inputBackgroundColor: 'rgba(120,10,10,0.5)',
    inputTextColor: 'rgb(182, 182, 182)',
    logBackgroundColor: 'rgba(25,0,0,0.5)',
    logTextColor: 'red',
  },
  matcha: {
    inputBackgroundColor: 'rgba(250,250,250,0.5)',
    inputTextColor: 'white',
    logBackgroundColor: 'rgba(50, 100, 80, 0.5)',
    logTextColor: 'green',
  },
}
