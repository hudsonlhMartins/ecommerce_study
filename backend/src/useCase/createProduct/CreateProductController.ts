import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateProductUseCase } from './CreateProductUseCase'
import { z } from 'zod'

export class CreateProductController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly createProduct: CreateProductUseCase) {}

  async handle(request: FastifyRequest, response: FastifyReply): Promise<void> {
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
      await this.createProduct.execute({ name, description })
      response.status(201)
    } catch (error: unknown | undefined) {
      if (error instanceof Error) {
        return response.status(400).send({ message: error.message })
      }
      response.status(500).send({ message: 'Error unexpected' })
    }
  }
}
