import {
  IProductsRepository,
  ProductsJoinSku,
} from '@/repositories/IProductsRepository'
import { UUID } from 'node:crypto'

export class FindProductByIdUseCase {
  // eslint-disable-next-line
    constructor(private readonly productsRepository: IProductsRepository){}

  async execute(id: UUID): Promise<ProductsJoinSku | undefined> {
    const product = await this.productsRepository.findById(id)
    if (!product) return undefined
    return product
  }
}
