import { FastifyReply, FastifyRequest } from 'fastify'
import { ListAllProductInCategoryUseCase } from './ListAllProductInCategoryUseCase'

export class ListAllProductInCategoryController {
  // eslint-disable-next-line
    constructor(private readonly listAllProductInCategoryController: ListAllProductInCategoryUseCase){}

  async handle(_: FastifyRequest, res: FastifyReply) {
    const listProductInCategory =
      await this.listAllProductInCategoryController.execute()

    return res.status(200).send(listProductInCategory)
  }
}
