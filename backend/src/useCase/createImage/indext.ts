import { CreateImageController } from './CreateImageController'
import { CreateimageUseCase } from './CreateImageUseCase'
import { SqlImageRepository } from '@/repositories/implementations/SqlImageRepository'

const sqlImageRepository = new SqlImageRepository()
const createimageUseCase = new CreateimageUseCase(sqlImageRepository)
const createImageController = new CreateImageController(createimageUseCase)

export { createImageController }
