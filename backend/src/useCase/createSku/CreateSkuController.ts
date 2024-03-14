import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateSkuUseCase } from './CreateSkuUseCase'
import { z } from 'zod'

export class CreateSkuController {
  // eslint-disable-next-line
    constructor(private readonly createSkuUseCase: CreateSkuUseCase){}

  async handle(req: FastifyRequest, res: FastifyReply) {
    const schemaCreateSku = z.object({
      name: z.string(),
      productId: z.string(),
      price: z.number(),
      listPrice: z.number().optional(),
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
      await this.createSkuUseCase.execute(props)
      return res.status(201).send()
    } catch (err) {
      return res.status(500).send({ message: 'Error unexpected' })
    }
  }
}
