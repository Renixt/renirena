import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

const filePath = path.join(process.cwd(), 'src', 'data', 'movies.json')

export async function GET() {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([])
    }

    const file = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(file)

    return NextResponse.json(data)
  } catch (error) {
    console.error(error)
    return NextResponse.json([], { status: 500 })
  }
}

export async function POST(req) {
  const body = await req.json()

  //leer el sjon actual
  const fileData = fs.fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
    : []

  fileData.push(body)

  fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2))

  return NextResponse.json({ success: true })
}
