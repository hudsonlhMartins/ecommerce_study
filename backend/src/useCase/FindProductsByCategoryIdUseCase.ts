import { IProductInCategoryRepository } from '@/repositories/IProductInCategoryRepository'
import { UUID } from 'node:crypto'

export class FindProductsByCategoryIdUseCase {
  // eslint-disable-next-line
    constructor(private readonly productInCategoryRepository: IProductInCategoryRepository){}

  async execute(categoryId: UUID) {
    const products =
      await this.productInCategoryRepository.findProductByCategoryId(categoryId)

    return products
  }
}
