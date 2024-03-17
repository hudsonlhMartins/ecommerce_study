import { FastifyInstance } from 'fastify'
import { createSkuController } from '../controllers/createSku.controller'
import { listAllSkuController } from '../controllers/listAllSku.controller'
import { findSkuBySkuIdController } from '../controllers/findSkuBySkuId.controller'

export const skuRouter = async (app: FastifyInstance) => {
  app.post('/create', createSkuController)
  app.get('/', listAllSkuController)
  app.get('/:skuId', findSkuBySkuIdController)
}
