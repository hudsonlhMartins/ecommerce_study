import { FastifyReply, FastifyRequest } from 'fastify'
import { ListProductUseCase } from './ListProductsUseCase'

export class ListProductController {
  // eslint-disable-next-line
    constructor(private readonly listProductsUseCase: ListProductUseCase){}

  async handle(_: FastifyRequest, res: FastifyReply) {
    const products = await this.listProductsUseCase.execute()

    return res.status(200).send(products)
  }
}
