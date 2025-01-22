import express from 'express';

const router = express.Router();

router.get('/', (req, res,next) => {
  console.log('Entrando al endpoint')
    try {
    throw new Error('Error forzado')

    } catch (error) {
      next(error)
    }
})

// Ruta para simular un error 404
router.get('/not-found', (req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

export default router
