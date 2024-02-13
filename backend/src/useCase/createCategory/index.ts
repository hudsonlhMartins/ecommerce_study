import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'
import { SqlCategoryRepository } from '@/repositories/implementations/SqlCategoryRepository'

const sqlCategoryRepository = new SqlCategoryRepository()
const createCategoryUseCase = new CreateCategoryUseCase(sqlCategoryRepository)
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
)

export { createCategoryController }
