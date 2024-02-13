import { SqlProductRepository } from '@/repositories/implementations/SqlProductRepository'
import { AddProductInCategoryController } from './AddProductInCategoryController'
import { AddProductInCategoryUseCase } from './AddProductInCategoryUseCase'

const sqlProductRepository = new SqlProductRepository()
const addProductInCategoryUseCase = new AddProductInCategoryUseCase(
  sqlProductRepository,
)
const addProductInCategoryController = new AddProductInCategoryController(
  addProductInCategoryUseCase,
)

export { addProductInCategoryController }
