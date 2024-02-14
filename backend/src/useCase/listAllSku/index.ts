import { ListAllSkuController } from './ListAllSkuController'
import { ListAllSkuUseCase } from './ListAllSkuUseCase'
import { SqlSkuRepository } from '@/repositories/implementations/SqlSkuRepository'

const sqlSkuRepository = new SqlSkuRepository()
const listAllSkuUseCase = new ListAllSkuUseCase(sqlSkuRepository)
const listAllSkuController = new ListAllSkuController(listAllSkuUseCase)

export { listAllSkuController }
