import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { UUID } from 'node:crypto'
import { makeFindProductsByCategoryIdUseCase } from '@/useCase/factories/make-find-products-by-category-id-use-case'

export const findProductByCategoryIdController = async (
  req: FastifyRequest,
  res: FastifyReply,
) => {
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/

  const schemaFinProductByCategoryId = z.object({
    categoryId: z.string().refine((value) => uuidRegex.test(value), {
      message: 'Invalid UUID',
    }),
  })

  const _params = schemaFinProductByCategoryId.safeParse(req.params)
  if (!_params.success) {
    return res.status(400).send({ message: 'Invalid Request' })
  }

  const { categoryId } = _params.data

  const findProductInCategoryUseCase = makeFindProductsByCategoryIdUseCase()

  const productsByCategoryId = await findProductInCategoryUseCase.execute(
    categoryId as UUID,
  )

  return productsByCategoryId
}
