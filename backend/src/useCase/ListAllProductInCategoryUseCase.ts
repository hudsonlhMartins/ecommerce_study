import { IProductInCategoryRepository } from '@/repositories/IProductInCategoryRepository'

export class ListAllProductInCategoryUseCase {
  // eslint-disable-next-line
    constructor(private readonly productInCategoryRepository: IProductInCategoryRepository){}

  async execute() {
    const productInCategoryList = await this.productInCategoryRepository.list()
    return productInCategoryList
  }
}
