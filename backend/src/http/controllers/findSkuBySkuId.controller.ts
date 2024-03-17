import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { UUID } from 'node:crypto'
import { makeFindSkuBySkuIdUseCase } from '@/useCase/factories/make-find-sku-by-sku-id-use-case'

export const findSkuBySkuIdController = async (
  req: FastifyRequest,
  res: FastifyReply,
) => {
  const schemaFindSkuBySkuId = z.object({
    skuId: z.string(),
  })

  const _params = schemaFindSkuBySkuId.safeParse(req.params)
  if (!_params.success) {
    return res
      .status(400)
      .send({ message: 'Invalid request', error: _params.error.message })
  }

  const { skuId } = _params.data

  try {
    const findSkuBySkuIdUseCase = makeFindSkuBySkuIdUseCase()

    const sku = await findSkuBySkuIdUseCase.execute(skuId as UUID)
    return res.status(200).send(sku)
  } catch (err) {
    return res.status(500).send({ message: 'Error unexpected' })
  }
}
