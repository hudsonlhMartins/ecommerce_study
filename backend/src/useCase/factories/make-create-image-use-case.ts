import { SqlImageRepository } from '@/repositories/implementations/SqlImageRepository'
import { CreateimageUseCase } from '../createImageUseCase'

export const makeCreateImageUseCase = () => {
  const sqlImageRepository = new SqlImageRepository()
  const createimageUseCase = new CreateimageUseCase(sqlImageRepository)
  return createimageUseCase
}
