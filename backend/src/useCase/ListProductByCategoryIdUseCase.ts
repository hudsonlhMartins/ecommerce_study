import { IProductsRepository } from '@/repositories/IProductsRepository'
import { UUID } from 'crypto'

export class ListProductByCategoryIdUseCase {
  // eslint-disable-next-line
  constructor(private readonly productRepository: IProductsRepository) {}

  async execute(categoryId: string) {
    const products = await this.productRepository.listProductsByCategoryId(
      categoryId as UUID,
    )

    return products
  }
}
