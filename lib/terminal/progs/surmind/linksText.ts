import { TerminalLine } from '../../types'

export const links = `
SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
SS                                  surmind                                  SS
SS              surmind.art   surmind.dev     surmind.co                     SS
SS                                  socials                                  SS
SS   instagram: surmind.art   surmind.shop    surmind.co    surmind.dev      SS
SS   twitter:   surmindart    surmindshop                                    SS
SS                                  merchs                                   SS
SS              surmind.redbubble.com                                        SS
SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS`.split(
  '\n',
)

export const surmindLinksBlock: TerminalLine[] = [
  [
    {
      text: 'SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',
      color: 'gray',
    },
  ],
  [
    { text: 'SS                                  ', color: 'gray' },
    { text: 'surmind', color: 'pink', bold: true },
    { text: '                                  SS', color: 'gray' },
  ],
  [
    { text: 'SS              ', color: 'gray' },
    { text: 'surmind.art', color: 'green', href: 'https://surmind.art' },
    { text: '   ' },
    { text: 'surmind.dev', color: 'green', href: 'https://surmind.dev' },
    { text: '     ' },
    { text: 'surmind.co', color: 'green', href: 'https://surmind.co' },
    { text: '                     SS', color: 'gray' },
  ],
  [
    { text: 'SS                                  ', color: 'gray' },
    { text: 'socials', color: 'pink', bold: true },
    { text: '                                  SS', color: 'gray' },
  ],
  [
    { text: 'SS   instagram: ', color: 'gray' },
    {
      text: 'surmind.art',
      color: 'cyan',
      href: 'https://instagram.com/surmind.art',
    },
    { text: '   ' },
    {
      text: 'surmind.shop',
      color: 'cyan',
      href: 'https://instagram.com/surmind.shop',
    },
    { text: '    ' },
    {
      text: 'surmind.co',
      color: 'cyan',
      href: 'https://instagram.com/surmind.co',
    },
    { text: '    ' },
    {
      text: 'surmind.dev',
      color: 'cyan',
      href: 'https://instagram.com/surmind.dev',
    },
    { text: '      SS', color: 'gray' },
  ],
  [
    { text: 'SS   twitter:   ', color: 'gray' },
    { text: 'surmindart', color: 'cyan', href: 'https://x.com/surmindart' },
    { text: '    ' },
    { text: 'surmindshop', color: 'cyan', href: 'https://x.com/surmindshop' },
    { text: '                                    SS', color: 'gray' },
  ],
  [
    { text: 'SS                                  ', color: 'gray' },
    { text: 'merchs', color: 'pink', bold: true },
    { text: '                                   SS', color: 'gray' },
  ],
  [
    { text: 'SS              ', color: 'gray' },
    {
      text: 'surmind.redbubble.com',
      color: 'cyan',
      href: 'https://surmind.redbubble.com',
    },
    { text: '                                        SS', color: 'gray' },
  ],
  [
    {
      text: 'SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',
      color: 'gray',
    },
  ],
]
