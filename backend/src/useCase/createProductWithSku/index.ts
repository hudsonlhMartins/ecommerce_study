import { CreateProductWithSkuController } from './CreateProductWithSkuController'
import { CreateProductWithSkuUseCase } from './createProductWithSkuUseCase'
import { SqlSkuRepository } from '@/repositories/implementations/SqlSkuRepository'
import { SqlCategoryRepository } from '@/repositories/implementations/SqlCategoryRepository'
import { SqlProductRepository } from '@/repositories/implementations/SqlProductRepository'
import { SqlImageRepository } from '@/repositories/implementations/SqlImageRepository'

const sqlSkuRepository = new SqlSkuRepository()
const sqlCategoryRepository = new SqlCategoryRepository()
const sqlProductRepository = new SqlProductRepository()
const sqlImageRepository = new SqlImageRepository()
const createProductWithSkuUseCase = new CreateProductWithSkuUseCase(
  sqlCategoryRepository,
  sqlImageRepository,
  sqlProductRepository,
  sqlSkuRepository,
)

const createProductWithSkuController = new CreateProductWithSkuController(
  createProductWithSkuUseCase,
)

export { createProductWithSkuController }
