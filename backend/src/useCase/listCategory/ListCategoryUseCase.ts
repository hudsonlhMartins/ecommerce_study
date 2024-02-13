import { ICategoryRepository } from '@/repositories/ICategoryRepository'

export class ListCategoryUseCase {
  // eslint-disable-next-line
    constructor(private readonly categoryRepository: ICategoryRepository){}

  async execute() {
    const categories = await this.categoryRepository.list()

    return categories
  }
}
