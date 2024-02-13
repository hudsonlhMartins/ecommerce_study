import { SqlProductInCategoryRepository } from '@/repositories/implementations/SqlProductInCategoryRepository'
import { AddProductInCategoryController } from './AddProductInCategoryController'
import { AddProductInCategoryUseCase } from './AddProductInCategoryUseCase'

const sqlProductInCategoryRepository = new SqlProductInCategoryRepository()
const addProductInCategoryUseCase = new AddProductInCategoryUseCase(
  sqlProductInCategoryRepository,
)
const addProductInCategoryController = new AddProductInCategoryController(
  addProductInCategoryUseCase,
)

export { addProductInCategoryController }
