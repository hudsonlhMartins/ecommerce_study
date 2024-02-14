import { FindSkuBySkuIdController } from './FindSkuBySkuIdController'
import { FindSkuBySkuIdUseCase } from './FindSkuBySkuIdUseCase'
import { SqlSkuRepository } from '@/repositories/implementations/SqlSkuRepository'

const sqlSkuRepository = new SqlSkuRepository()
const findSkuBySkuIdUseCase = new FindSkuBySkuIdUseCase(sqlSkuRepository)
const findSkuBySkuIdController = new FindSkuBySkuIdController(
  findSkuBySkuIdUseCase,
)

export { findSkuBySkuIdController, findSkuBySkuIdUseCase }
