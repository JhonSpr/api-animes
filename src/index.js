const express = require('express')
const cors = require('cors')
const moment = require('moment-timezone')
const v1animeRouter = require('./v1/routes/animeRoutes')
const db = require('./database/Recientes.json')
const firebaseSetup = require('../firebaseConfig')
const sincronizarDatosConFirebase = require('../firebaseConfig')
const app = express()
const PORT = process.env.PORT || 3001

app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use('/api/v1/animes/', v1animeRouter)
app.use('/api/v1/recien-agregados', (req, res) => {
  res.send({ recientes: db.recientes })
})

app.use((req, res, next) => {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.header('Pragma', 'no-cache')
  res.header('Expires', '0')
  next()
})

app.use('/api/v1/recien-agregados', (req, res) => {
  console.log(data)

  res.send({ recientes: db.recientes })
})

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`)
  app, PORT
})
