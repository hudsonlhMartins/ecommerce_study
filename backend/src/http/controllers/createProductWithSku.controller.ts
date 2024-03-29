import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { UUID } from 'crypto'
import { ErrorNotFound } from '@/errors/error-not-found'
import { makeCreateProductWithSkuUseCase } from '@/useCase/factories/make-create-product-with-sku-use-case'

export const createProductWithSkuController = async (
  req: FastifyRequest,
  res: FastifyReply,
) => {
  const schemaCreateSku = z.object({
    name: z.string(),
    description: z.string(),
    categoryId: z.string(),
    skus: z.array(
      z.object({
        name: z.string(),
        images: z.array(
          z.object({
            name: z.string(),
            image_url: z.string(),
          }),
        ),
        price: z.number(),
        listprice: z.number(),
        color: z.string(),
        size: z.string(),
        isAvailable: z.boolean(),
      }),
    ),
  })

  const _body = schemaCreateSku.safeParse(req.body)
  if (!_body.success) {
    return res
      .status(400)
      .send({ message: 'Invalid request', error: _body.error.message })
  }
  const props = _body.data
  const { categoryId, ...product } = props
  const _categoryId = categoryId as UUID
  try {
    const createProductWithSkuUseCase = makeCreateProductWithSkuUseCase()
    await createProductWithSkuUseCase.execute({
      ...product,
      categoryId: _categoryId,
    })
    return res.status(201).send()
  } catch (err) {
    if (err instanceof ErrorNotFound) {
      return res.status(404).send({ message: err.message })
    }

    if (err instanceof Error) {
      return res
        .status(500)
        .send({ message: 'Error unexpected', error: err.message })
    }

    throw err
  }
}
