import { ISkuRepository } from '@/repositories/ISkuRepository'
import { UUID } from 'node:crypto'

export class FindSkuBySkuIdUseCase {
  // eslint-disable-next-line
    constructor(private readonly skuRepository: ISkuRepository) {}

  async execute(skuId: UUID) {
    const sku = await this.skuRepository.findById(skuId)
    return sku
  }
}
