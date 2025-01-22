import express from 'express'
import collectionsRouter from './collections.router.js'


const AppRouter = (app) => {
  const router = express.Router()

  app.use('/api/v1', router)
  router.use('/collections', collectionsRouter)

}

export default AppRouter
