import { ListAllImagesController } from './ListAllImagesController'
import { ListAllImagesUseCase } from './ListAllImagesUseCase'
import { SqlImageRepository } from '@/repositories/implementations/SqlImageRepository'

const sqlImageRepository = new SqlImageRepository()
const listAllImagesUseCase = new ListAllImagesUseCase(sqlImageRepository)
const listAllImagesController = new ListAllImagesController(
  listAllImagesUseCase,
)

export { listAllImagesController }
