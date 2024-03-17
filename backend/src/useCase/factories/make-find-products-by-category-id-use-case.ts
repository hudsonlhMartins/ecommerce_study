import { SqlProductInCategoryRepository } from '@/repositories/implementations/SqlProductInCategoryRepository'
import { FindProductsByCategoryIdUseCase } from '../FindProductsByCategoryIdUseCase'

export const makeFindProductsByCategoryIdUseCase = () => {
  const sqlProductInCategoryRepository = new SqlProductInCategoryRepository()
  const findProductByCategoryIdUseCase = new FindProductsByCategoryIdUseCase(
    sqlProductInCategoryRepository,
  )

  return findProductByCategoryIdUseCase
}
