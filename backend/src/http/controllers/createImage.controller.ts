import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { UUID } from 'node:crypto'
import { makeCreateImageUseCase } from '@/useCase/factories/make-create-image-use-case'

export const createImageController = async (
  req: FastifyRequest,
  res: FastifyReply,
) => {
  const schemaCreateImage = z.object({
    imageUrl: z.string(),
    name: z.string(),
    skuId: z.string(),
  })

  const _body = schemaCreateImage.safeParse(req.body)
  if (!_body.success) {
    return res
      .status(400)
      .send({ message: 'Invalid request', error: _body.error })
  }

  const { imageUrl, name, skuId } = _body.data
  const _skuId = skuId as UUID

  try {
    const createImageUseCase = makeCreateImageUseCase()
    await createImageUseCase.execute({
      image_url: imageUrl,
      name,
      skuId: _skuId,
    })
    return res.status(201).send()
  } catch (err) {
    console.log(err)
    return res.status(500).send({ message: 'Error unexpected' })
  }
}
