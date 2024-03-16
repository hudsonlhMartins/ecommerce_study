import { Sku } from '@/entities/Sku'
import { ISkuRepository } from '@/repositories/ISkuRepository'

export class CreateSkuUseCase {
  // eslint-disable-next-line
    constructor(private readonly skuRepository: ISkuRepository){}

  async execute(props: Sku) {
    const sku = new Sku(props)
    try {
      await this.skuRepository.save(sku)
    } catch (e) {
      console.log(e)
    }
  }
}
