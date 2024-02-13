import { IProductInCategory } from '@/repositories/IProductInCategoryRepository'
import { UUID } from 'node:crypto'

export interface Product_Category {
  categoryId: UUID
  productId: UUID
}
export class AddProductInCategoryUseCase {
  // eslint-disable-next-line
    constructor(private readonly productRepository: IProductInCategory){}

  async execute(props: Product_Category) {
    const productInCategory = await this.productRepository.save(props)

    return productInCategory
  }
}
