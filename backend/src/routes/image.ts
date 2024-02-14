import { listAllImagesController } from '@/useCase/listAllImages'
import { FastifyInstance } from 'fastify'

export const imageRouter = async (app: FastifyInstance) => {
  app.get('/', listAllImagesController.handle.bind(listAllImagesController))
}
