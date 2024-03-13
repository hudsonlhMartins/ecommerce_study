import { createProductController } from '@/useCase/createProduct'
import { createProductWithSkuController } from '@/useCase/createProductWithSku'
import { findProductByIdController } from '@/useCase/findProductbyId'
import { listProductsController } from '@/useCase/listProducts'
import { FastifyInstance } from 'fastify'

export const productsRouter = async (app: FastifyInstance) => {
  app.post(
    '/create',
    createProductController.handle.bind(createProductController),
  )
  app.get(
    '/:productId',
    findProductByIdController.handle.bind(findProductByIdController),
  )

  app.post(
    '/create-with-sku',
    createProductWithSkuController.handle.bind(createProductWithSkuController),
  )

  app.get('/', listProductsController.handle.bind(listProductsController))
}
