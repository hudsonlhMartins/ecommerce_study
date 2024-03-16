import { CreateProductWithSkuController } from './CreateProductWithSkuController'
import { CreateProductWithSkuUseCase } from './CreateProductWithSkuUseCase'
import { SqlSkuRepository } from '@/repositories/implementations/SqlSkuRepository'
import { SqlCategoryRepository } from '@/repositories/implementations/SqlCategoryRepository'
import { SqlProductRepository } from '@/repositories/implementations/SqlProductRepository'
import { SqlImageRepository } from '@/repositories/implementations/SqlImageRepository'
import { SqlProductInCategoryRepository } from '@/repositories/implementations/SqlProductInCategoryRepository'

const sqlSkuRepository = new SqlSkuRepository()
const sqlCategoryRepository = new SqlCategoryRepository()
const sqlProductRepository = new SqlProductRepository()
const sqlImageRepository = new SqlImageRepository()
const sqlProductInCategoryRepository = new SqlProductInCategoryRepository()

const createProductWithSkuUseCase = new CreateProductWithSkuUseCase(
  sqlCategoryRepository,
  sqlImageRepository,
  sqlProductRepository,
  sqlSkuRepository,
  sqlProductInCategoryRepository,
)

const createProductWithSkuController = new CreateProductWithSkuController(
  createProductWithSkuUseCase,
)

export { createProductWithSkuController }
