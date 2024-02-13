import { CreateProductUseCase } from './CreateProductUseCase'
import { CreateProductController } from './CreateProductController'
import { SqlProductRepository } from '@/repositories/implementations/SqlProductRepository'

const sqliteProductsRepository = new SqlProductRepository()
const createProductUseCase = new CreateProductUseCase(sqliteProductsRepository)
const createProductController = new CreateProductController(
  createProductUseCase,
)

export { createProductController }
