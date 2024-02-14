import { createCategoryController } from '@/useCase/createCategory'
import { listCategoryController } from '@/useCase/listCategory'
import { FastifyInstance } from 'fastify'

export const categoryRouter = async (app: FastifyInstance) => {
  app.post(
    '/create',
    createCategoryController.handle.bind(createCategoryController),
  )
  app.get('/', listCategoryController.handle.bind(listCategoryController))
}
