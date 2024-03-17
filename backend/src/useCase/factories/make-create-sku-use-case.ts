import { SqlSkuRepository } from '@/repositories/implementations/SqlSkuRepository'
import { CreateSkuUseCase } from '../CreateSkuUseCase'

export const makeCreateSkuUseCase = () => {
  const sqlSkuRepository = new SqlSkuRepository()
  const createSkuUseCase = new CreateSkuUseCase(sqlSkuRepository)
  return createSkuUseCase
}
