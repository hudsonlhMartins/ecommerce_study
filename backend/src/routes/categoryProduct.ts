import { addProductInCategoryController } from '@/useCase/addCategoryInProduct'
import { findCategoryByProductIdController } from '@/useCase/findCategoryByProductId/intex'
import { findProductByCategoryIdController } from '@/useCase/findProductByCategoryId/indext'
import { listAllProductInCategoryController } from '@/useCase/listAllProductInCategory'
import { FastifyInstance } from 'fastify'

export const categoryProductRouter = async (app: FastifyInstance) => {
  app.post(
    '/add-category',
    addProductInCategoryController.handle.bind(addProductInCategoryController),
  )
  app.get(
    '/',
    listAllProductInCategoryController.handle.bind(
      listAllProductInCategoryController,
    ),
  )
  app.get(
    '/:categoryId',
    findProductByCategoryIdController.handle.bind(
      findProductByCategoryIdController,
    ),
  )
  app.get(
    '/category/:productId',
    findCategoryByProductIdController.handle.bind(
      findCategoryByProductIdController,
    ),
  )
}
