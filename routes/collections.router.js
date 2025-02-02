import express from 'express';
import Collection from './../services/collections.service.js'

const router = express.Router();
const collections = new Collection()

const collectionsRouter = (io)=>{
  router.get('/:collection', async(req, res,next) => {
    const { collection } = req.params
    try {
      const result = await collections.getAll(collection)

      io.emit('mensaje_respuesta',{message:'Se hizo una consulta'})

      res.status(200).json({
        success:true,
        message:'Hola mundo',
        data:result
      })
    } catch (error) {
      console.log('En router',error)
      next(error)
    }
  })

  return router
}



export default collectionsRouter
