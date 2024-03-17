import { makeCreateProductUseCase } from '@/useCase/factories/make-create-product-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const createProductController = (
  request: FastifyRequest,
  response: FastifyReply,
) => {
  const schemaCreateProduct = z.object({
    name: z.string(),
    description: z.string(),
  })

  const _body = schemaCreateProduct.safeParse(request.body)

  if (!_body.success) {
    return response.status(400).send({ message: 'Invalid request' })
  }
  const { description, name } = _body.data
  try {
    const createProductUseCase = makeCreateProductUseCase()
    createProductUseCase.execute({ name, description })
    response.status(201)
  } catch (error: unknown | undefined) {
    if (error instanceof Error) {
      return response.status(400).send({ message: error.message })
    }
    response.status(500).send({ message: 'Error unexpected' })
  }
}
