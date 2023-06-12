import { fileURLToPath } from 'url'
import express from 'express'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const express = require('express')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})