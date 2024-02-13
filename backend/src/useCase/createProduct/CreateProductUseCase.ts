import { Product } from '@/entities/Product'
import { IProductsRepository } from '@/repositories/IProductsRepository'

export class CreateProductUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly productsRepository: IProductsRepository) {}

  async execute({ name, description }: Product): Promise<void> {
    const productAlreadyExists = await this.productsRepository.findByName(name)

    if (productAlreadyExists) {
      throw new Error('Product already exists')
    }

    const product = new Product({ name, description })

    await this.productsRepository.save(product)
  }
}
