import { SqlCategoryRepository } from '@/repositories/implementations/SqlCategoryRepository'
import { ListCategoryUseCase } from '../ListCategoryUseCase'

export const makeListCategoryUseCase = () => {
  const sqlCategoryRepository = new SqlCategoryRepository()
  const listCategoryUseCase = new ListCategoryUseCase(sqlCategoryRepository)

  return listCategoryUseCase
}
