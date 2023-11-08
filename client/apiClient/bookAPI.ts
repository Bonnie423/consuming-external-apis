import request from 'superagent'

export async function getBooks() {
  const response = await request.get('/api/v1/books')
  // console.log(response.body)
  return response.body
}
