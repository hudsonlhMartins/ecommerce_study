import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { UUID } from 'crypto'
import { makeFindCategoryByProductIdUseCase } from '@/useCase/factories/make-find-category-by-product-Id-use-case'

export const findCategoryByProductIdController = async (
  req: FastifyRequest,
  res: FastifyReply,
) => {
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/

  const schemaFindCategoryByProductId = z.object({
    productId: z.string().refine((value) => uuidRegex.test(value), {
      message: 'Invalid UUID',
    }),
  })

  const _params = schemaFindCategoryByProductId.safeParse(req.params)
  if (!_params.success) {
    return res.status(400).send({ message: 'Invalid Request' })
  }

  const { productId } = _params.data
  const findCategoryByProductIdUseCase = makeFindCategoryByProductIdUseCase()
  const category = await findCategoryByProductIdUseCase.execute(
    productId as UUID,
  )

  return category
}
