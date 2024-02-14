import { CreateSkuController } from './CreateSkuController'
import { CreateSkuUseCase } from './CreateSkuUseCase'
import { SqlSkuRepository } from '@/repositories/implementations/SqlSkuRepository'

const sqlSkuRepository = new SqlSkuRepository()
const createSkuUseCase = new CreateSkuUseCase(sqlSkuRepository)
const createSkuController = new CreateSkuController(createSkuUseCase)

export { createSkuController }
