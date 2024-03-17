import { SqlCategoryRepository } from '@/repositories/implementations/SqlCategoryRepository'
import { SqlImageRepository } from '@/repositories/implementations/SqlImageRepository'
import { SqlProductInCategoryRepository } from '@/repositories/implementations/SqlProductInCategoryRepository'
import { SqlProductRepository } from '@/repositories/implementations/SqlProductRepository'
import { SqlSkuRepository } from '@/repositories/implementations/SqlSkuRepository'
import { CreateProductWithSkuUseCase } from '../CreateProductWithSkuUseCase'

export const makeCreateProductWithSkuUseCase = () => {
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

  return createProductWithSkuUseCase
}
