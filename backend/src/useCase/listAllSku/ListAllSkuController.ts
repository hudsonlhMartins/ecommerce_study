import { FastifyReply, FastifyRequest } from 'fastify'
import { ListAllSkuUseCase } from './ListAllSkuUseCase'

export class ListAllSkuController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly listAllSkuUseCase: ListAllSkuUseCase) {}

  async handle(_: FastifyRequest, res: FastifyReply) {
    try {
      const skus = await this.listAllSkuUseCase.execute()
      return res.code(200).send(skus)
    } catch (error) {
      return res.code(500).send({ error: 'Error unexpected' })
    }
  }
}
