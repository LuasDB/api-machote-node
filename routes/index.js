import express from 'express'
import collectionsRouter from './collections.router.js'
const router = express.Router()

const AppRouter = (app,io) => {

  app.use('/api/v1', router)
  router.use('/collections', collectionsRouter(io))
  //Agregar las rutas necesarias

}

export default AppRouter
