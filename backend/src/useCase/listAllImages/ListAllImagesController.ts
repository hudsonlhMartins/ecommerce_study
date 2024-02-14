import { FastifyReply, FastifyRequest } from 'fastify'
import { ListAllImagesUseCase } from './ListAllImagesUseCase'

export class ListAllImagesController {
  // eslint-disable-next-line
    constructor(private readonly listAllImageUseCase: ListAllImagesUseCase){}

  async handle(_: FastifyRequest, res: FastifyReply) {
    const images = await this.listAllImageUseCase.execute()

    return res.status(200).send(images)
  }
}
