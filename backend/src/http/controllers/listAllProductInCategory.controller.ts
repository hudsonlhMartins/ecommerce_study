import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListAllProductInCategoryUseCase } from '@/useCase/factories/make-list-all-product-in-category-use-case'

export const listAllProductInCategoryController = async (
  _: FastifyRequest,
  res: FastifyReply,
) => {
  const listAllProductInCategoryController =
    makeListAllProductInCategoryUseCase()
  const listProductInCategory =
    await listAllProductInCategoryController.execute()

  return res.status(200).send(listProductInCategory)
}
