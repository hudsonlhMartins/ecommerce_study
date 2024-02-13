import { FindCategoryByProductIdController } from './FindCategoryByProductIdController'
import { FindCategoryByProductIdUseCase } from './findCategoryByProductIdUseCase'
import { SqlProductInCategoryRepository } from '@/repositories/implementations/SqlProductInCategoryRepository'

const sqlProductInCategoryRepository = new SqlProductInCategoryRepository()
const findCategoryByProductIdUseCase = new FindCategoryByProductIdUseCase(
  sqlProductInCategoryRepository,
)
const findCategoryByProductIdController = new FindCategoryByProductIdController(
  findCategoryByProductIdUseCase,
)
export { findCategoryByProductIdController }
