import express from 'express'
import request from 'superagent'

import 'dotenv/config'

const router = express.Router()

console.log(process.env.MOVIEDB_API_TOKEN)

router.get('/', async(req,res)=>{
const response = await request.get('')
})

export default router


