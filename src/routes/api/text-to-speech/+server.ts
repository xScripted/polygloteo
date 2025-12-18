// src/routes/api/generate-audio/+server.ts
import { json } from '@sveltejs/kit'
import fetch from 'node-fetch'
import { GoogleAuth } from 'google-auth-library'
import { LANGS } from '@/modules/shared/constants/langs'

const KEY_FILE = './credentials.json' // ruta a tu JSON

export const POST = async ({ request }) => {
  const { text, lang } = await request.json()

  // Crear cliente de autenticación
  const auth = new GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  })

  const client = await auth.getClient()
  const accessToken = await client.getAccessToken()

  // Endpoint oficial TTS (síncrono)
  const url = 'https://texttospeech.googleapis.com/v1/text:synthesize'

  // Body de la petición

  const voice = lang === LANGS.FRENCH ? { languageCode: 'fr-FR', name: 'fr-FR-Wavenet-A' } : { languageCode: 'ja-JP', name: 'ja-JP-Wavenet-A' }

  const body = {
    input: { text },
    voice,
    audioConfig: { audioEncoding: 'MP3', speakingRate: 0.8 },
  }

  // Llamada a la API
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken.token}`,
    },
    body: JSON.stringify(body),
  })

  const data: any = await res.json()

  if (!data.audioContent) {
    return json({ error: 'No se pudo generar audio', details: data }, { status: 500 })
  }

  // Retornar base64 al frontend
  return json({ audio: data.audioContent })
}
