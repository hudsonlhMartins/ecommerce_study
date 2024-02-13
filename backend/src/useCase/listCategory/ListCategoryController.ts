import { FastifyReply, FastifyRequest } from 'fastify'
import { ListCategoryUseCase } from './ListCategoryUseCase'

export class ListCategoryController {
  // eslint-disable-next-line
    constructor(private readonly listCategoryUseCase: ListCategoryUseCase){}

  async handle(_: FastifyRequest, res: FastifyReply) {
    const categories = await this.listCategoryUseCase.execute()
    return res.status(200).send(categories)
  }
}
