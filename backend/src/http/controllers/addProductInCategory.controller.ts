import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeAddProductInCategory } from '@/useCase/factories/make-add-product-in-category'
import { UUID } from 'crypto'

export const addProductInCategoryController = async (
  req: FastifyRequest,
  res: FastifyReply,
) => {
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/

  const schemaProductInCategory = z.object({
    productId: z.string().refine((value) => uuidRegex.test(value), {
      message: 'Invalid UUID',
    }),
    categoryId: z.string().refine((value) => uuidRegex.test(value), {
      message: 'Invalid UUID',
    }),
  })

  const _body = schemaProductInCategory.safeParse(req.body)

  if (!_body.success) {
    return res.status(400).send({ message: 'Invalid request' })
  }
  const { categoryId, productId } = _body.data
  const _categoryId = categoryId as UUID
  const _productId = productId as UUID

  const addProductInCategory = makeAddProductInCategory()
  await addProductInCategory.execute({
    categoryId: _categoryId,
    productId: _productId,
  })
  return res.status(201).send()
}
