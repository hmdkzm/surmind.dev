export const ls = (progs: string[], args: string[]) => {
  const [subCommand] = args
  if (subCommand === 'help') {
    return ['List commands']
  }
  return [progs.map((p) => '•' + p).join('    ')]
}
