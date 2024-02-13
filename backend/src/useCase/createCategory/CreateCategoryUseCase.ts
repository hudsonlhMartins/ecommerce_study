import { Category } from '@/entities/Category'
import { ICategoryRepository } from '@/repositories/ICategoryRepository'

export class CreateCategoryUseCase {
  // eslint-disable-next-line
    constructor(private readonly categoryRepository: ICategoryRepository){}

  async execute({ name }: { name: string }) {
    const category = new Category({ name })
    const createCategory = await this.categoryRepository.save(category)

    return createCategory
  }
}
