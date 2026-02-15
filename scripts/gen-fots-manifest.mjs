import fs from 'fs'
import path from 'path'
import exifr from 'exifr' // 👈 importante: default import

// Carpeta con tus fotos dentro de /public
const dir = path.join(process.cwd(), 'public', 'fots')
const outPath = path.join(process.cwd(), 'public', 'fots.json')

if (!fs.existsSync(dir)) {
  console.error('❌ No existe la carpeta public/fots')
  fs.writeFileSync(outPath, JSON.stringify({ images: [] }, null, 2), 'utf-8')
  process.exit(0)
}

const files = fs.readdirSync(dir).filter(f => /\.jpe?g$/i.test(f))

function coerceExifDate(value) {
  if (!value) return null
  if (value instanceof Date) return value

  const s = String(value).trim()

  // EXIF típico: 2025:04:13 00:18:32
  const m = s.match(/^(\d{4}):(\d{2}):(\d{2})[ T](\d{2}):(\d{2}):(\d{2})/)
  if (m) return new Date(`${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}Z`)

  const t = Date.parse(s)
  return Number.isNaN(t) ? null : new Date(t)
}

function pickBestDate(meta, stat) {
  const candidates = [
    meta?.DateTimeOriginal,
    meta?.CreateDate,
    meta?.ModifyDate,
    meta?.dateTimeOriginal,
    meta?.createDate,
    meta?.modifyDate,
    meta?.XMPCreateDate,
    meta?.XMPModifyDate,
    meta?.DateTime
  ]

  for (const c of candidates) {
    const d = coerceExifDate(c)
    if (d) return d
  }

  // Fallbacks del sistema de archivos
  if (stat?.birthtime instanceof Date) return stat.birthtime
  if (stat?.mtime instanceof Date) return stat.mtime
  return null
}

const images = await Promise.all(
  files.map(async file => {
    const filePath = path.join(dir, file)

    let meta = null
    try {
      // Leer como Buffer: más confiable que pasar la ruta
      const buf = fs.readFileSync(filePath)
      meta = await exifr.parse(buf) // pedir todos los tags
    } catch (e) {
      // si hay error, meta queda null
    }

    let stat = null
    try {
      stat = fs.statSync(filePath)
    } catch {}

    const dto = pickBestDate(meta, stat)
    const iso = dto instanceof Date ? dto.toISOString() : null

    if (!iso) {
      console.warn(`⚠️ Sin fecha para ${file} (no EXIF y sin stat usable)`)
    }

    return {
      src: `/fots/${file}`,
      DateTimeOriginal: iso // e.g. "2025-04-13T00:18:32.000Z"
    }
  })
)

// Guardar manifest
fs.writeFileSync(outPath, JSON.stringify({ images }, null, 2), 'utf-8')
console.log(`✅ fots.json generado (${images.length} elementos) -> ${outPath}`)

//RUN
//> node scripts/gen-fots-manifest.mjs
