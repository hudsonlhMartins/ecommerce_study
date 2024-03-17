import { SqlSkuRepository } from '@/repositories/implementations/SqlSkuRepository'
import { ListAllSkuUseCase } from '../ListAllSkuUseCase'

export const makeListAllSkuUseCase = () => {
  const sqlSkuRepository = new SqlSkuRepository()
  const listAllSkuUseCase = new ListAllSkuUseCase(sqlSkuRepository)

  return listAllSkuUseCase
}
