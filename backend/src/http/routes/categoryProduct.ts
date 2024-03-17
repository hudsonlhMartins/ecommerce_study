import { addProductInCategoryController } from '../controllers/addProductInCategory.controller'

import { FastifyInstance } from 'fastify'
import { listAllProductInCategoryController } from '../controllers/listAllProductInCategory.controller'
import { findProductByCategoryIdController } from '../controllers/findProductByCategoryId.controller'
import { findCategoryByProductIdController } from '../controllers/findCategoryByProductId.controller'

export const categoryProductRouter = async (app: FastifyInstance) => {
  app.post('/add-category', addProductInCategoryController)
  app.get('/', listAllProductInCategoryController)
  app.get('/:categoryId', findProductByCategoryIdController)
  app.get('/category/:productId', findCategoryByProductIdController)
}
