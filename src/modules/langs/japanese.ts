// src/lib/data/weeks.ts

export interface Phrase {
  id: string
  translate: string
  target: string
  targetHelper: string
  targetHelper2: string
  tier: number
}

export const phrases = {
  goodAfternoon: {
    translate: 'Buenos tardes',
    target: '今日',
    targetHelper: 'きょう',
    targetHelper2: 'Kyou',
    tier: 1,
  },
  imVeryTired: {
    translate: 'Estoy muy cansado',
    target: '今日',
    targetHelper: 'きょう',
    targetHelper2: 'Kyou',
    tier: 1,
  },
}
