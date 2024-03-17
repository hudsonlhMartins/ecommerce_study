import { SqlCategoryRepository } from '@/repositories/implementations/SqlCategoryRepository'
import { CreateCategoryUseCase } from '../CreateCategoryUseCase'

export const makeCreateCategoryUseCase = () => {
  const sqlCategoryRepository = new SqlCategoryRepository()
  const createCategoryUseCase = new CreateCategoryUseCase(sqlCategoryRepository)

  return createCategoryUseCase
}
