import { UUID } from 'node:crypto'
import { IProductsRepository, ProductsJoinSku } from '../IProductsRepository'
import { Product } from '@/entities/Product'
import { knex } from '@/database'

export class SqlProductRepository implements IProductsRepository {
  async save(product: Product): Promise<void> {
    await knex('products').insert(product)
  }

  async findById(productId: UUID): Promise<ProductsJoinSku | undefined> {
    const product = await knex('products').where('productId', productId).first()
    if (!product) return undefined
    const skus = await knex('skus').where('productId', productId)
    return { ...product, skus }
  }

  async findByName(name: string): Promise<ProductsJoinSku | undefined> {
    const product = await knex('products').whereLike('name', name).first()
    if (!product) return undefined
    const skus = await knex('skus').where('productId', product.productId)
    return { ...product, skus }
  }

  async list(): Promise<ProductsJoinSku[]> {
    const products = await knex('products')
    const productjoinSku: ProductsJoinSku[] = []
    for (const product of products) {
      const skus = await knex('skus').where('productId', product.productId)
      productjoinSku.push({ ...product, skus })
    }
    return productjoinSku
  }
}
