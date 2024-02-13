import { SqlProductRepository } from '@/repositories/implementations/SqlProductRepository'
import { ListProductController } from './ListProductsController'
import { ListProductUseCase } from './ListProductsUseCase'

const sqlProductRepository = new SqlProductRepository()
const listProductsUseCase = new ListProductUseCase(sqlProductRepository)
const listProductsController = new ListProductController(listProductsUseCase)

export { listProductsController }
