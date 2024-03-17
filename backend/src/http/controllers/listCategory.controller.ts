import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListCategoryUseCase } from '@/useCase/factories/make-list-category-use-case'

export const listCategoryController = async (
  _: FastifyRequest,
  res: FastifyReply,
) => {
  const listCategoryUseCase = makeListCategoryUseCase()
  const categories = await listCategoryUseCase.execute()
  return res.status(200).send(categories)
}
