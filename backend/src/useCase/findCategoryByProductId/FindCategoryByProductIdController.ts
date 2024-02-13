import { FastifyReply, FastifyRequest } from 'fastify'
import { FindCategoryByProductIdUseCase } from './findCategoryByProductIdUseCase'
import { z } from 'zod'
import { UUID } from 'crypto'

export class FindCategoryByProductIdController {
  // eslint-disable-next-line
    constructor(private readonly findCategoryByProductIdUseCase: FindCategoryByProductIdUseCase ){}

  async handle(req: FastifyRequest, res: FastifyReply) {
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
    const category = await this.findCategoryByProductIdUseCase.execute(
      productId as UUID,
    )

    return category
  }
}
