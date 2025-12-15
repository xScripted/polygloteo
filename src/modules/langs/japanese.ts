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
    translate: 'Buenas tardes',
    target: 'こんにちは。',
    targetHelper: 'こんにちは',
    targetHelper2: 'Konnichiwa',
    tier: 1,
  },
  imVeryTired: {
    translate: 'Estoy muy cansado',
    target: 'めっちゃ疲れた。',
    targetHelper: 'めっちゃつかれた',
    targetHelper2: 'Meccha tsukareta',
    tier: 1,
  },
  goodAfternoonImVeryTired: {
    translate: 'Buenas tardes, estoy muy cansado',
    target: 'こんにちは。めっちゃ疲れた。',
    targetHelper: 'こんにちはめっちゃつかれた',
    targetHelper2: 'Konnichiwa Meccha tsukareta',
    tier: 1,
  },
  areYouOk: {
    translate: '¿Te encuentras bien?',
    target: '大丈夫ですか？',
    targetHelper: 'だいじょうぶですか',
    targetHelper2: 'Daijōbu desu ka',
    tier: 1,
  },
  imOkCasual: {
    translate: 'Estoy bien',
    target: '大丈夫。',
    targetHelper: 'だいじょうぶ。',
    targetHelper2: 'Daijōbu.',
    tier: 1,
  },

  tiredFromTravelCasual: {
    translate: 'Solo estoy cansado del viaje',
    target: '旅行で疲れただけ。',
    targetHelper: 'りょこうでつかれただけ。',
    targetHelper2: 'Ryokō de tsukareta dake.',
    tier: 1,
  },

  needToFindHotelCasual: {
    translate: 'Necesito encontrar un hotel',
    target: 'ホテルを探さなきゃ。',
    targetHelper: 'ホテルをさがさなきゃ。',
    targetHelper2: 'Hoteru o sagasanakya.',
    tier: 1,
  },
}
