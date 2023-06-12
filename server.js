import { fileURLToPath } from 'url'
import express from 'express'
import path from 'path'

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)


app.use(express.static(path.join(__dirname, '/dist')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})