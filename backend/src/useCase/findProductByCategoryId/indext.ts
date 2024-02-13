import { FindProductByCategoryIdController } from './FindProductByCategoryIdController'
import { FindProductsByCategoryIdUseCase } from './FindProductsByCategoryIdUseCase'
import { SqlProductInCategoryRepository } from '@/repositories/implementations/SqlProductInCategoryRepository'

const sqlProductInCategoryRepository = new SqlProductInCategoryRepository()
const findProductByCategoryIdUseCase = new FindProductsByCategoryIdUseCase(
  sqlProductInCategoryRepository,
)
const findProductByCategoryIdController = new FindProductByCategoryIdController(
  findProductByCategoryIdUseCase,
)

export { findProductByCategoryIdController }
