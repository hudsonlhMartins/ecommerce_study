import { FastifyReply, FastifyRequest } from 'fastify'
import { FindSkuBySkuIdUseCase } from './FindSkuBySkuIdUseCase'
import { z } from 'zod'
import { UUID } from 'node:crypto'

export class FindSkuBySkuIdController {
  // eslint-disable-next-line
    constructor(private readonly findSkuBySkuIdUseCase: FindSkuBySkuIdUseCase) {}

  async handle(req: FastifyRequest, res: FastifyReply) {
    const schemaFindSkuBySkuId = z.object({
      skuId: z.string(),
    })

    const _params = schemaFindSkuBySkuId.safeParse(req.params)
    if (!_params.success) {
      return res
        .status(400)
        .send({ message: 'Invalid request', error: _params.error.message })
    }

    const { skuId } = _params.data

    try {
      const sku = await this.findSkuBySkuIdUseCase.execute(skuId as UUID)
      return res.status(200).send(sku)
    } catch (err) {
      return res.status(500).send({ message: 'Error unexpected' })
    }
  }
}
