import { SqlCategoryRepository } from '@/repositories/implementations/SqlCategoryRepository'
import { ListCategoryController } from './ListCategoryController'
import { ListCategoryUseCase } from './ListCategoryUseCase'

const sqlCategoryRepository = new SqlCategoryRepository()
const listCategoryUseCase = new ListCategoryUseCase(sqlCategoryRepository)
const listCategoryController = new ListCategoryController(listCategoryUseCase)

export { listCategoryController }
