import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'
import { request } from 'http'

export async function GET() {
  const { data, error } = await supabase.from('movies').select('*').order('id')
  console.log('GETTTT')
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(request) {
  try {
    const { title, image, genre, rating } = await request.json()
    if (!title || !rating || !genre) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('movies')
      .insert([{ title, image, genre, rating }])
      .select()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data[0], { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }
}
