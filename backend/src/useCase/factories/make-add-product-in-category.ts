import { SqlProductInCategoryRepository } from '@/repositories/implementations/SqlProductInCategoryRepository'
import { AddProductInCategoryUseCase } from '../AddProductInCategoryUseCase'

export const makeAddProductInCategory = () => {
  const sqlProductInCategoryRepository = new SqlProductInCategoryRepository()
  const addProductInCategoryUseCase = new AddProductInCategoryUseCase(
    sqlProductInCategoryRepository,
  )

  return addProductInCategoryUseCase
}
