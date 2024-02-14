import { Image } from '@/entities/Image'
import { IImageRepository } from '@/repositories/IImageRepository'

export class CreateimageUseCase {
  // eslint-disable-next-line
    constructor(private readonly imageRepository: IImageRepository){}

  async execute(props: Omit<Image, 'imageUrl'>) {}
}
