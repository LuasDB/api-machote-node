import { db } from './../db/mongoClient.js'
import Boom from '@hapi/boom'

export default class Collection{
  constructor(){

  }
  async create(collection,data){

  }

  async getAll(collection){
    try {
      const collections = await db.listCollections().toArray()
      const collectionExist = collections.some(item=>item.name === collection)
      console.log('Existe?',collectionExist)

      if(!collectionExist){
        throw Boom.notFound(`La colección ${collection} no existe en la base de datos`)
      }

      const result = await db.collection(collection).find().toArray()
      return result || []
    } catch (error) {
      if (Boom.isBoom(error)) {
        throw error
      }
      throw Boom.badImplementation('Error al obtener la colección', error);
    }
  }

  async getOneById(collection,id){

  }

  async updateOneById(collection,id){}

  async deleteOneById(collection,id){}

}
