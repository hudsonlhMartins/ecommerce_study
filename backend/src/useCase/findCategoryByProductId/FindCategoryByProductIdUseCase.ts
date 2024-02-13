import { IProductInCategoryRepository } from '@/repositories/IProductInCategoryRepository'
import { UUID } from 'node:crypto'

export class FindCategoryByProductIdUseCase {
  // eslint-disable-next-line
    constructor(private readonly productInCategoryRepository: IProductInCategoryRepository){}

  async execute(productId: UUID) {
    const category =
      await this.productInCategoryRepository.findCategorytByProductId(productId)

    return category
  }
}
