import { makeCreateCategoryUseCase } from '@/useCase/factories/make-create-category-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const createCategoryController = async (
  req: FastifyRequest,
  res: FastifyReply,
) => {
  const schemaCategoryCreate = z.object({
    name: z.string(),
  })

  const _body = schemaCategoryCreate.safeParse(req.body)
  if (!_body.success) {
    return res.send(400).send({ message: 'Invalid request' })
  }

  const createCategoryUseCase = makeCreateCategoryUseCase()
  await createCategoryUseCase.execute({
    name: _body.data.name,
  })

  return res.status(201).send()
}
