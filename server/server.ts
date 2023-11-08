import { join } from 'node:path'
import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'

import welcome from './routes/welcome.ts'
import book from './routes/book.ts'
import movies from './routes/movies.ts'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/v1/welcome', welcome)
server.use('/api/v1/books', book)
server.use('/api/v1/moviess', movies)

export default server
