import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateimageUseCase } from './CreateImageUseCase'
import { z } from 'zod'
import { UUID } from 'node:crypto'

export class CreateImageController {
  // eslint-disable-next-line
    constructor(private readonly createImageUseCase: CreateimageUseCase){}

  async handle(req: FastifyRequest, res: FastifyReply) {
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
      await this.createImageUseCase.execute({
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
}
