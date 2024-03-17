import { SqlSkuRepository } from '@/repositories/implementations/SqlSkuRepository'
import { FindSkuBySkuIdUseCase } from '../FindSkuBySkuIdUseCase'

export const makeFindSkuBySkuIdUseCase = () => {
  const sqlSkuRepository = new SqlSkuRepository()
  const findSkuBySkuIdUseCase = new FindSkuBySkuIdUseCase(sqlSkuRepository)

  return findSkuBySkuIdUseCase
}
