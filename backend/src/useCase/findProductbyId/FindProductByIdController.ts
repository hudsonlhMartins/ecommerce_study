import { FastifyReply, FastifyRequest } from 'fastify'
import { FindProductByIdUseCase } from './FindProductByIdUseCase'
import { z } from 'zod'
import { UUID } from 'node:crypto'

export class FindProductByIdController {
  // eslint-disable-next-line
    constructor(private readonly findProductByIdUseCase: FindProductByIdUseCase){}

  async handle(request: FastifyRequest, response: FastifyReply) {
    const uuidRegex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/

    const schemaFindProduct = z.object({
      productId: z.string().refine((value) => uuidRegex.test(value), {
        message: 'Invalid UUID',
      }),
    })

    const _body = schemaFindProduct.safeParse(request.params)

    if (!_body.success) {
      return response.status(400).send({ message: 'Invalid Request' })
    }

    const { productId } = _body.data

    try {
      const product = await this.findProductByIdUseCase.execute(
        productId as UUID,
      )
      return response.status(200).send(product)
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).send({ message: err.message })
      }
      response.status(500).send({ message: 'Error unexpected' })
    }
  }
}
