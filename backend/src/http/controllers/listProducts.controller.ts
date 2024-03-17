import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListProductsUseCase } from '@/useCase/factories/make-list-products-use-case'

export const listProductController = async (
  _: FastifyRequest,
  res: FastifyReply,
) => {
  const listProductsUseCase = makeListProductsUseCase()
  const products = await listProductsUseCase.execute()

  return res.status(200).send(products)
}
