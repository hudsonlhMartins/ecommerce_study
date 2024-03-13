import { Sku } from '@/entities/Sku'
import { UUID } from 'node:crypto'

export interface ISkuJoinImage extends Sku {
  images: Array<{
    imageUrl: string
    name: string
    imageId: UUID
  }>
}

export interface ISkuRepository {
  save(sku: Sku): Promise<number[]>
  findById(skuId: UUID): Promise<ISkuJoinImage | undefined>
  findByName(name: string): Promise<Sku | undefined>

  list(): Promise<ISkuJoinImage[]>
}
