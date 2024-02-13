import { FindProductByIdUseCase } from './FindProductByIdUseCase'
import { FindProductByIdController } from './FindProductByIdController'
import { SqlProductRepository } from '@/repositories/implementations/SqlProductRepository'

const sqlProductRepository = new SqlProductRepository()
const findProductByIdUseCase = new FindProductByIdUseCase(sqlProductRepository)
const findProductByIdController = new FindProductByIdController(
  findProductByIdUseCase,
)

export { findProductByIdController }
