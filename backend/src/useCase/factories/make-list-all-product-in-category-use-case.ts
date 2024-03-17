import { SqlProductInCategoryRepository } from '@/repositories/implementations/SqlProductInCategoryRepository'
import { ListAllProductInCategoryUseCase } from '../ListAllProductInCategoryUseCase'

export const makeListAllProductInCategoryUseCase = () => {
  const sqlProductInCategoryRepository = new SqlProductInCategoryRepository()
  const listAllProductInCategoryUsecase = new ListAllProductInCategoryUseCase(
    sqlProductInCategoryRepository,
  )

  return listAllProductInCategoryUsecase
}
