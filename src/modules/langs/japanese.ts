// src/lib/data/weeks.ts

export interface Phrase {
  id: string
  translate: string
  target: string
  targetHelper: string
  targetHelper2: string
  tier: number
}

export interface Week {
  week: number
  phrases: Phrase[]
}

export const weeks = [
  {
    phrases: [
      {
        id: 'today',
        translate: 'Hoy',
        target: '今日',
        targetHelper: 'きょう',
        targetHelper2: 'Kyou',
        tier: 1,
      },
      {
        id: 'good-morning',
        translate: 'Buenos días',
        target: 'おはよう',
        targetHelper: 'おはよう',
        targetHelper2: 'Ohayou',
        tier: 1,
      },
      {
        id: 'thanks',
        translate: 'Gracias',
        target: 'ありがとう',
        targetHelper: 'ありがとう',
        targetHelper2: 'Arigatou',
        tier: 1,
      },
      {
        id: 'sorry',
        translate: 'Perdón',
        target: 'ごめん',
        targetHelper: 'ごめん',
        targetHelper2: 'Gomen',
        tier: 1,
      },
      {
        id: 'yes',
        translate: 'Sí',
        target: 'はい',
        targetHelper: 'はい',
        targetHelper2: 'Hai',
        tier: 1,
      },
      {
        id: 'no',
        translate: 'No',
        target: 'いいえ',
        targetHelper: 'いいえ',
        targetHelper2: 'Iie',
        tier: 1,
      },
      {
        id: 'little-tired',
        translate: 'Estoy un poco cansado',
        target: '少し疲れています',
        targetHelper: 'すこし つかれています',
        targetHelper2: 'Sukoshi tsukarete imasu',
        tier: 1,
      },
      {
        id: 'im-happy',
        translate: 'Estoy feliz',
        target: '嬉しい',
        targetHelper: 'うれしい',
        targetHelper2: 'Ureshii',
        tier: 1,
      },
      {
        id: 'im-here',
        translate: 'Estoy aquí',
        target: 'ここにいます',
        targetHelper: 'ここ に います',
        targetHelper2: 'Koko ni imasu',
        tier: 1,
      },
      {
        id: 'i-like-it',
        translate: 'Me gusta',
        target: '好きです',
        targetHelper: 'すき です',
        targetHelper2: 'Suki desu',
        tier: 1,
      },
    ],
  },
  {
    phrases: [
      {
        id: 'im-eating',
        translate: 'Estoy comiendo',
        target: '食べています',
        targetHelper: 'たべて います',
        targetHelper2: 'Tabete imasu',
        tier: 2,
      },
      {
        id: 'im-going-home',
        translate: 'Voy a casa',
        target: '家に帰ります',
        targetHelper: 'いえ に かえります',
        targetHelper2: 'Ie ni kaerimasu',
        tier: 2,
      },
      {
        id: 'im-working',
        translate: 'Estoy trabajando',
        target: '仕事しています',
        targetHelper: 'しごと して います',
        targetHelper2: 'Shigoto shite imasu',
        tier: 2,
      },
      {
        id: 'i-understand',
        translate: 'Entiendo',
        target: '分かります',
        targetHelper: 'わかります',
        targetHelper2: 'Wakarimasu',
        tier: 2,
      },
      {
        id: 'i-dont-understand',
        translate: 'No entiendo',
        target: '分かりません',
        targetHelper: 'わかりません',
        targetHelper2: 'Wakarimasen',
        tier: 2,
      },
      {
        id: 'wait',
        translate: 'Espera',
        target: '待って',
        targetHelper: 'まって',
        targetHelper2: 'Matte',
        tier: 2,
      },
      {
        id: 'one-second',
        translate: 'Un segundo',
        target: 'ちょっと待って',
        targetHelper: 'ちょっと まって',
        targetHelper2: 'Chotto matte',
        tier: 2,
      },
      {
        id: 'im-going',
        translate: 'Voy',
        target: '行きます',
        targetHelper: 'いきます',
        targetHelper2: 'Ikimasu',
        tier: 2,
      },
      {
        id: 'come-here',
        translate: 'Ven aquí',
        target: 'ここに来て',
        targetHelper: 'ここ に きて',
        targetHelper2: 'Koko ni kite',
        tier: 2,
      },
      {
        id: 'just-a-bit',
        translate: 'Solo un poco',
        target: '少しだけ',
        targetHelper: 'すこし だけ',
        targetHelper2: 'Sukoshi dake',
        tier: 2,
      },
    ],
  },
  {
    phrases: [
      {
        id: 'whats-up',
        translate: 'Qué tal',
        target: 'どうしたの',
        targetHelper: 'どうしたの',
        targetHelper2: 'Doushita no',
        tier: 3,
      },
      {
        id: 'are-you-ok',
        translate: 'Estás bien?',
        target: '大丈夫？',
        targetHelper: 'だいじょうぶ？',
        targetHelper2: 'Daijoubu?',
        tier: 3,
      },
      {
        id: 'im-thinking',
        translate: 'Estoy pensando',
        target: '考えています',
        targetHelper: 'かんがえて います',
        targetHelper2: 'Kangaete imasu',
        tier: 3,
      },
      {
        id: 'i-dont-know',
        translate: 'No lo sé',
        target: '分からない',
        targetHelper: 'わからない',
        targetHelper2: 'Wakaranai',
        tier: 3,
      },
      {
        id: 'where-are-you',
        translate: 'Dónde estás',
        target: 'どこにいるの？',
        targetHelper: 'どこ に いるの？',
        targetHelper2: 'Doko ni iru no?',
        tier: 3,
      },
      {
        id: 'how-much',
        translate: 'Cuánto cuesta',
        target: 'いくらですか？',
        targetHelper: 'いくら です か？',
        targetHelper2: 'Ikura desu ka?',
        tier: 3,
      },
      {
        id: 'i-like-this',
        translate: 'Me gusta esto',
        target: 'これが好き',
        targetHelper: 'これ が すき',
        targetHelper2: 'Kore ga suki',
        tier: 3,
      },
      {
        id: 'can-you-help',
        translate: 'Puedes ayudarme',
        target: '手伝ってくれる？',
        targetHelper: 'てつだって くれる？',
        targetHelper2: 'Tetsudatte kureru?',
        tier: 3,
      },
      {
        id: 'im-busy',
        translate: 'Estoy ocupado',
        target: '忙しい',
        targetHelper: 'いそがしい',
        targetHelper2: 'Isogashii',
        tier: 3,
      },
      {
        id: 'im-going-out',
        translate: 'Voy a salir',
        target: '出かけます',
        targetHelper: 'でかけます',
        targetHelper2: 'Dekakemasu',
        tier: 3,
      },
    ],
  },
]
