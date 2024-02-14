import { Image } from '@/entities/Image'
import { UUID } from 'node:crypto'

export interface IImageRepository {
  save(image: Image): Promise<void>
  findById(imageId: UUID): Promise<Image | undefined>
  findByName(name: string): Promise<Image | undefined>
  findBySkuId(skuId: UUID): Promise<Image | undefined>
  list(): Promise<Image[]>
}
