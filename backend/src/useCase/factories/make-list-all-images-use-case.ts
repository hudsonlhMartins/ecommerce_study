import { SqlImageRepository } from '@/repositories/implementations/SqlImageRepository'
import { ListAllImagesUseCase } from '../ListAllImagesUseCase'

export const makeListAllImagesUseCase = () => {
  const sqlImageRepository = new SqlImageRepository()
  const listAllImagesUseCase = new ListAllImagesUseCase(sqlImageRepository)

  return listAllImagesUseCase
}
