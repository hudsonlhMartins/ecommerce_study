import { makeListProductByCategoryId } from '@/useCase/factories/make-list-product-by-category-id'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const listProductByCategoryId = async (
  req: FastifyRequest,
  res: FastifyReply,
) => {
  const params = req.params
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/

  const schemaFindProduct = z.object({
    categoryId: z.string().refine((value) => uuidRegex.test(value), {
      message: 'Invalid UUID',
    }),
  })

  const _body = schemaFindProduct.safeParse(params)

  if (!_body.success) {
    return res.status(400).send({ message: 'Invalid Request' })
  }

  const { categoryId } = _body.data

  const listProductByCategoryIdUseCase = makeListProductByCategoryId()

  try {
    const products = await listProductByCategoryIdUseCase.execute(categoryId)
    return res.status(200).send(products)
  } catch (e) {
    console.error(e)
    return res.status(500).send({ message: 'Internal Server Error' })
  }
}
