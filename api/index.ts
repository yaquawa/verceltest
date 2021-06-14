import path from 'path'
import { readFileSync } from 'fs'
import { VercelRequest, VercelResponse } from '@vercel/node'

const indexHtml = readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')

export default (request: VercelRequest, response: VercelResponse) => {
  response.status(200)
  response.setHeader('Content-Type', 'text/html')
  response.end(indexHtml)
}
