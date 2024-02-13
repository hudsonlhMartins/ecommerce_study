import { UUID } from 'node:crypto'
import { knex } from '@/database'
import { ISkuRepository } from '../ISkuRepository'
import { Sku } from '@/entities/Sku'

export class SqlSkuRepository implements ISkuRepository {
  async save(sku: Sku): Promise<void> {
    return await knex('skus').insert(sku)
  }

  async findById(skuId: UUID): Promise<Sku | undefined> {
    return await knex('skus').where('skuId', skuId).first()
  }

  async findByName(name: string): Promise<Sku | undefined> {
    return await knex('skus').where('name', name).first()
  }

  async list(): Promise<Sku[]> {
    return await knex('skus')
  }
}
