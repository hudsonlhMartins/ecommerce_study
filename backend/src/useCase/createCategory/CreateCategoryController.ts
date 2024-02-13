import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'
import { z } from 'zod'

export class CreateCategoryController {
  // eslint-disable-next-line
    constructor(private readonly createCategoryUseCase: CreateCategoryUseCase){}

  async handle(req: FastifyRequest, res: FastifyReply) {
    const schemaCategoryCreate = z.object({
      name: z.string(),
    })

    const _body = schemaCategoryCreate.safeParse(req.body)
    if (!_body.success) {
      return res.send(400).send({ message: 'Invalid request' })
    }

    await this.createCategoryUseCase.execute({
      name: _body.data.name,
    })

    return res.status(201).send()
  }
}
