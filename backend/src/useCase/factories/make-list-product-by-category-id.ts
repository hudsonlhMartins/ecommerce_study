import { SqlProductRepository } from '@/repositories/implementations/SqlProductRepository'
import { ListProductByCategoryIdUseCase } from '../ListProductByCategoryIdUseCase'

export const makeListProductByCategoryId = () => {
  const sqlProductRepository = new SqlProductRepository()
  const listProductByCategoryIdUseCase = new ListProductByCategoryIdUseCase(
    sqlProductRepository,
  )

  return listProductByCategoryIdUseCase
}
