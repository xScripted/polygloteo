import { phrases } from './french'
import { phrases as phrases2 } from './japanese'

export const getPhrases = (lang: string) => {
  switch (lang) {
    case 'french':
      return phrases
    case 'japanese':
      return phrases2
    default:
      return phrases
  }
}
