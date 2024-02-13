import { IProductsRepository } from '@/repositories/IProductsRepository'
import { UUID } from 'node:crypto'

export interface Product_Category {
  categoryId: UUID
  productId: UUID
}
export class AddProductInCategoryUseCase {
  // eslint-disable-next-line
    constructor(private readonly productRepository: IProductsRepository){}

  async execute(props: Product_Category) {
    const productInCategory =
      await this.productRepository.addProductInCategory(props)

    return productInCategory
  }
}
