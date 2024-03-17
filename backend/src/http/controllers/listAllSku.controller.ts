import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListAllSkuUseCase } from '@/useCase/factories/make-list-all-sku-use-case'

export const listAllSkuController = async (
  _: FastifyRequest,
  res: FastifyReply,
) => {
  try {
    const listAllSkuUseCase = makeListAllSkuUseCase()
    const skus = await listAllSkuUseCase.execute()
    return res.code(200).send(skus)
  } catch (error) {
    return res.code(500).send({ error: 'Error unexpected' })
  }
}
