import { IImageRepository } from '@/repositories/IImageRepository'

export class ListAllImagesUseCase {
  // eslint-disable-next-line
    constructor(private readonly  imageRepository: IImageRepository){}

  async execute() {
    return await this.imageRepository.list()
  }
}
