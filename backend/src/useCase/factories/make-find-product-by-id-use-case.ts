import { SqlProductRepository } from '@/repositories/implementations/SqlProductRepository'
import { FindProductByIdUseCase } from '../FindProductByIdUseCase'

export const makeFindProductByIdUseCase = () => {
  const sqlProductRepository = new SqlProductRepository()
  const findProductByIdUseCase = new FindProductByIdUseCase(
    sqlProductRepository,
  )

  return findProductByIdUseCase
}
