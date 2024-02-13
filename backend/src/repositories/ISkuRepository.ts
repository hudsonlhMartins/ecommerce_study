import { Sku } from '@/entities/Sku'
import { UUID } from 'node:crypto'

export interface ISkuRepository {
  save(sku: Sku): Promise<void>
  findById(skuId: UUID): Promise<Sku | undefined>
  findByName(name: string): Promise<Sku | undefined>

  list(): Promise<Sku[]>
}
