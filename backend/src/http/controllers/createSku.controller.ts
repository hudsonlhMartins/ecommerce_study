import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateSkuUseCase } from '@/useCase/factories/make-create-sku-use-case'

export const createSkuController = async (
  req: FastifyRequest,
  res: FastifyReply,
) => {
  const schemaCreateSku = z.object({
    name: z.string(),
    productId: z.string(),
    price: z.number(),
    listprice: z.number(),
    color: z.string(),
    size: z.string(),
    isAvailable: z.boolean(),
  })

  const _body = schemaCreateSku.safeParse(req.body)
  if (!_body.success) {
    return res
      .status(400)
      .send({ message: 'Invalid request', error: _body.error.message })
  }
  const props = _body.data

  try {
    const createSkuUseCase = makeCreateSkuUseCase()
    await createSkuUseCase.execute(props)
    return res.status(201).send()
  } catch (err) {
    return res.status(500).send({ message: 'Error unexpected' })
  }
}
