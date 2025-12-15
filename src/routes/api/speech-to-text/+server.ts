import { json } from '@sveltejs/kit'
import fetch from 'node-fetch'
import { GoogleAuth } from 'google-auth-library'

const KEY_FILE = './credentials.json'

export const POST = async ({ request }) => {
  const form = await request.formData()
  const file = form.get('audio') as File

  if (!file) {
    return json({ error: 'No se recibió archivo de audio' }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())

  const auth = new GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  })

  const client = await auth.getClient()
  const accessToken = await client.getAccessToken()

  const url = 'https://speech.googleapis.com/v1/speech:recognize'

  const body = {
    config: {
      encoding: 'WEBM_OPUS',
      languageCode: 'ja-JP',
      enableAutomaticPunctuation: true,
    },
    audio: { content: buffer.toString('base64') },
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken.token}`,
    },
    body: JSON.stringify(body),
  })

  const data: any = await res.json()

  if (!data.results) {
    return json({ error: 'No se pudo transcribir audio', details: data }, { status: 500 })
  }

  const transcription = data.results.map((r: any) => r.alternatives[0].transcript).join('\n')

  return json({ transcription })
}
