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
    key: 'goodAfternoon',
    translate: 'Buenas tardes',
    target: 'こんにちは。',
    targetHelper: 'こんにちは',
    targetHelper2: 'Konnichiwa',
    tier: 1,
  },
  imVeryTired: {
    key: 'imVeryTired',
    translate: 'Estoy muy cansado',
    target: 'めっちゃ疲れた。',
    targetHelper: 'めっちゃつかれた',
    targetHelper2: 'Meccha tsukareta',
    tier: 1,
  },
  goodAfternoonImVeryTired: {
    key: 'goodAfternoonImVeryTired',
    translate: 'Buenas tardes, estoy muy cansado',
    target: 'こんにちは。めっちゃ疲れた。',
    targetHelper: 'こんにちはめっちゃつかれた',
    targetHelper2: 'Konnichiwa Meccha tsukareta',
    tier: 1,
  },
  areYouOk: {
    key: 'areYouOk',
    translate: '¿Te encuentras bien?',
    target: '大丈夫ですか？',
    targetHelper: 'だいじょうぶですか',
    targetHelper2: 'Daijōbu desu ka',
    tier: 1,
  },
  imOkCasual: {
    key: 'imOkCasual',
    translate: 'Estoy bien',
    target: '大丈夫。',
    targetHelper: 'だいじょうぶ。',
    targetHelper2: 'Daijōbu.',
    tier: 1,
  },

  tiredFromTravel: {
    key: 'tiredFromTravel',
    translate: 'Solo estoy cansado del viaje',
    target: '旅行で疲れただけ。',
    targetHelper: 'りょこうでつかれただけ。',
    targetHelper2: 'Ryokō de tsukareta dake.',
    tier: 1,
  },

  needToFindHotel: {
    key: 'needToFindHotel',
    translate: 'Necesito encontrar un hotel',
    target: 'ホテルを見つける必要があります。',
    targetHelper: 'ホテルをみつけるひつようがあります',
    targetHelper2: 'Hoteru o mitsukeru hitsuyō ga arimasu.',
    tier: 1,
  },
}
