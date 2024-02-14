import { createImageController } from '@/useCase/createImage/indext'
import { listAllImagesController } from '@/useCase/listAllImages'
import { FastifyInstance } from 'fastify'

export const imageRouter = async (app: FastifyInstance) => {
  app.get('/', listAllImagesController.handle.bind(listAllImagesController))
  app.get('/create', createImageController.handle.bind(createImageController))
}
