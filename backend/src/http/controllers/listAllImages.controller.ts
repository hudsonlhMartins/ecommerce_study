import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListAllImagesUseCase } from '@/useCase/factories/make-list-all-images-use-case'

export const listAllImagesController = async (
  _: FastifyRequest,
  res: FastifyReply,
) => {
  const listAllImageUseCase = makeListAllImagesUseCase()
  const images = await listAllImageUseCase.execute()

  return res.status(200).send(images)
}
