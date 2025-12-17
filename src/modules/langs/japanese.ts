export interface Phrase {
  id: string
  translate: string
  target: string
  targetHelper: string
  targetHelper2: string
  chapter: number
}

export const phrases = {
  goodAfternoon: {
    key: 'goodAfternoon',
    translate: 'Buenas tardes',
    target: 'こんにちは。',
    targetHelper: 'こんにちは',
    targetHelper2: 'Konnichiwa',
    chapter: 1,
  },
  imVeryTired: {
    key: 'imVeryTired',
    translate: 'Estoy muy cansado',
    target: 'めっちゃ疲れた。',
    targetHelper: 'めっちゃつかれた',
    targetHelper2: 'Meccha tsukareta',
    chapter: 1,
  },
  goodAfternoonImVeryTired: {
    key: 'goodAfternoonImVeryTired',
    translate: 'Buenas tardes, estoy muy cansado',
    target: 'こんにちは。めっちゃ疲れた。',
    targetHelper: 'こんにちはめっちゃつかれた',
    targetHelper2: 'Konnichiwa Meccha tsukareta',
    chapter: 1,
  },
}
