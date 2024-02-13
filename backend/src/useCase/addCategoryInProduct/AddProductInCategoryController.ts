import { FastifyReply, FastifyRequest } from 'fastify'
import { AddProductInCategoryUseCase } from './AddProductInCategoryUseCase'
import { z } from 'zod'

export class AddProductInCategoryController {
  // eslint-disable-next-line
    constructor(private readonly addProductInCategory: AddProductInCategoryUseCase){}

  async handle(req: FastifyRequest, res: FastifyReply) {
    const uuidRegex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/

    const schemaProductInCategory = z.object({
      productId: z.string().refine((value) => uuidRegex.test(value), {
        message: 'Invalid UUID',
      }),
      categoryId: z.string().refine((value) => uuidRegex.test(value), {
        message: 'Invalid UUID',
      }),
    })

    const _body = schemaProductInCategory.safeParse(req.body)

    if (!_body.success) {
      return res.status(400).send({ message: 'Invalid request' })
    }
    const { categoryId, productId } = _body.data

    // @ts-ignore
    await this.addProductInCategory.execute({ categoryId, productId })
    return res.status(201).send()
  }
}
