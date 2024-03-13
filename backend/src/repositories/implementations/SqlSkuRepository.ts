import { UUID } from 'node:crypto'
import { knex } from '@/database'
import { ISkuJoinImage, ISkuRepository } from '../ISkuRepository'
import { Sku } from '@/entities/Sku'

export class SqlSkuRepository implements ISkuRepository {
  async save(sku: Sku) {
    return await knex('skus').returning('skuId').insert(sku)
  }

  async findById(skuId: UUID): Promise<ISkuJoinImage | undefined> {
    const sku = await knex('skus').where('skuId', skuId).first()
    if (!sku) return undefined
    const images = await knex('images').where('skuId', sku.skuId)
    return { ...sku, images }
  }

  async findByName(name: string): Promise<Sku | undefined> {
    return await knex('skus').where('name', name).first()
  }

  async list(): Promise<ISkuJoinImage[]> {
    const skus = await knex('skus')
    const skuWithImage: ISkuJoinImage[] = []
    for (const sku of skus) {
      const images = await knex('images').where('skuId', sku?.skuId)
      skuWithImage.push({ ...sku, images })
    }

    return skuWithImage
  }
}
