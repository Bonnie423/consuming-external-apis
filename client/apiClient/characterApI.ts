import request from 'superagent'

export async function getOneCharacter() {
  const response = await request.get('https://api.disneyapi.dev/character/33')
  return response.body.data
}