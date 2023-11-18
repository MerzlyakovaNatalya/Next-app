import { NextResponse } from 'next/server'

export const data: any = []

export async function POST(req: Request) {
  const body = await req.json()
  data.push(body)
  return NextResponse.json({ body })
}
