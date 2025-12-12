// Importar el cliente de Google Cloud TTS
import textToSpeech from '@google-cloud/text-to-speech'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Necesario para usar __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Crear cliente
const client = new textToSpeech.TextToSpeechClient()

async function generarAudio(frase) {
  const request = {
    input: { text: frase },
    voice: { languageCode: 'ja-JP', ssmlGender: 'FEMALE' },
    audioConfig: { audioEncoding: 'MP3' },
  }

  const [response] = await client.synthesizeSpeech(request)

  const outputPath = `${__dirname}/output.mp3`
  fs.writeFileSync(outputPath, response.audioContent, 'binary')
  console.log(`Audio generado: ${outputPath}`)
}

// Frase de prueba (puede ser tu mini-proyecto)
const frase = '今日はちょっとつかれたけど、だいじょうぶ。'
generarAudio(frase)
