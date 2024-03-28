import { NextApiResponse } from 'next'
import { type NextRequest } from 'next/server'

export async function POST(
  req: NextRequest,
  res: NextApiResponse
) {
  const body = await req.json();
  const apiKey = process.env.OPENAI_API_KEY
  const url = 'https://api.openai.com/v1/chat/completions'

  const bodyMessages = JSON.stringify({
    model: 'gpt-3.5-turbo',
    stream: false,
    messages: body,
  })

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: bodyMessages,
    })
    const data = await response.json()
    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}