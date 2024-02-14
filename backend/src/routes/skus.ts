import { createSkuController } from '@/useCase/createSku'
import { findSkuBySkuIdController } from '@/useCase/findSkuBySkuId'
import { listAllSkuController } from '@/useCase/listAllSku'
import { FastifyInstance } from 'fastify'

export const skuRouter = async (app: FastifyInstance) => {
  app.post('/create', createSkuController.handle.bind(createSkuController))
  app.get('/', listAllSkuController.handle.bind(listAllSkuController))
  app.get(
    '/:skuId',
    findSkuBySkuIdController.handle.bind(findSkuBySkuIdController),
  )
}
