import { FastifyInstance } from 'fastify'
import { createImageController } from '../controllers/createImage.controller'
import { listAllImagesController } from '../controllers/listAllImages.controller'

export const imageRouter = async (app: FastifyInstance) => {
  app.get('/', listAllImagesController)
  app.post('/create', createImageController)
}
