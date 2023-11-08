import express from 'express'

import request from 'superagent'

const router = express.Router()

router.get('/', async (req, res) => {
  const response = await request.get(
    'https://openlibrary.org/people/mekBot/books/currently-reading.json'
  )
  // console.log(response.body.reading_log_entries)

  res.json(response.body.reading_log_entries)
})

export default router
