import { FastifyInstance } from 'fastify'
import { createCategoryController } from '../controllers/createCategory.controller'
import { listCategoryController } from '../controllers/listCategory.controller'

export const categoryRouter = async (app: FastifyInstance) => {
  app.post('/create', createCategoryController)
  app.get('/', listCategoryController)
}
