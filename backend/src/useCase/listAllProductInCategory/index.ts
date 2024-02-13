import { ListAllProductInCategoryController } from './ListAllProductInCategoryController'
import { ListAllProductInCategoryUseCase } from './ListAllProductInCategoryUseCase'
import { SqlProductInCategoryRepository } from '@/repositories/implementations/SqlProductInCategoryRepository'

const sqlProductInCategoryRepository = new SqlProductInCategoryRepository()
const listAllProductInCategoryUsecase = new ListAllProductInCategoryUseCase(
  sqlProductInCategoryRepository,
)
const listAllProductInCategoryController =
  new ListAllProductInCategoryController(listAllProductInCategoryUsecase)

export { listAllProductInCategoryController }
