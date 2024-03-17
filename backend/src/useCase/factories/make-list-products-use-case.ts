import { SqlProductRepository } from '@/repositories/implementations/SqlProductRepository'
import { ListProductUseCase } from '../ListProductsUseCase'

export const makeListProductsUseCase = () => {
  const sqlProductRepository = new SqlProductRepository()
  const listProductsUseCase = new ListProductUseCase(sqlProductRepository)

  return listProductsUseCase
}
