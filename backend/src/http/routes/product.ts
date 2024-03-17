import { FastifyInstance } from 'fastify'
import { createProductController } from '../controllers/createProduct.controller'
import { findProductByIdController } from '../controllers/findProductById.controller'
import { createProductWithSkuController } from '../controllers/createProductWithSku.controller'
import { listProductController } from '../controllers/listProducts.controller'

export const productsRouter = async (app: FastifyInstance) => {
  app.post('/create', createProductController)
  app.get('/:productId', findProductByIdController)

  app.post('/create-with-sku', createProductWithSkuController)

  app.get('/', listProductController)
}
