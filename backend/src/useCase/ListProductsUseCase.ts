import { IProductsRepository } from '@/repositories/IProductsRepository'

export class ListProductUseCase {
  // eslint-disable-next-line
  constructor(private readonly productRepository: IProductsRepository) {}

  async execute() {
    const products = await this.productRepository.list()

    return products
  }
}
