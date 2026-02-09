import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

//params viene del folder slug
export async function GET(request, { params }) {
  const { slug } = await params //deve poner await porque es una promesa
  try {
    const { data, error } = await supabase
      .from('movies')
      .select('*')
      .eq('id', Number(slug))
      .single()

    //console.log(data)
    return NextResponse.json(data)
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
