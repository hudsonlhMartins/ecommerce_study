import { SqlProductInCategoryRepository } from '@/repositories/implementations/SqlProductInCategoryRepository'
import { FindCategoryByProductIdUseCase } from '../FindCategoryByProductIdUseCase'

export const makeFindCategoryByProductIdUseCase = () => {
  const sqlProductInCategoryRepository = new SqlProductInCategoryRepository()
  const findCategoryByProductIdUseCase = new FindCategoryByProductIdUseCase(
    sqlProductInCategoryRepository,
  )

  return findCategoryByProductIdUseCase
}
