import { SqlProductRepository } from '@/repositories/implementations/SqlProductRepository'
import { CreateProductUseCase } from '../CreateProductUseCase'

export const makeCreateProductUseCase = () => {
  const sqliteProductsRepository = new SqlProductRepository()
  const createProductUseCase = new CreateProductUseCase(
    sqliteProductsRepository,
  )

  return createProductUseCase
}
