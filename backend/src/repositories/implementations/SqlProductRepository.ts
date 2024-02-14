import { UUID } from 'node:crypto'
import { IProductsRepository, ProductsJoinSku } from '../IProductsRepository'
import { Product } from '@/entities/Product'
import { knex } from '@/database'
import { SqlProductInCategoryRepository } from './SqlProductInCategoryRepository'

export class SqlProductRepository implements IProductsRepository {
  async save(product: Product): Promise<void> {
    await knex('products').insert(product)
  }

  async findById(productId: UUID): Promise<ProductsJoinSku | undefined> {
    const product = await knex('products').where('productId', productId).first()
    if (!product) return undefined
    const sqlProductInCategoryRepository = new SqlProductInCategoryRepository()
    const categories =
      await sqlProductInCategoryRepository.findCategorytByProductId(
        product.productId as UUID,
      )
    const skus = await knex('skus').where('productId', productId)
    return { ...product, skus, categories: categories?.map((el) => el.name) }
  }

  async findByName(name: string): Promise<ProductsJoinSku | undefined> {
    const product = await knex('products').whereLike('name', name).first()
    if (!product) return undefined
    const skus = await knex('skus').where('productId', product.productId)
    const sqlProductInCategoryRepository = new SqlProductInCategoryRepository()
    const categories =
      await sqlProductInCategoryRepository.findCategorytByProductId(
        product.productId as UUID,
      )
    if (!categories) {
      return { ...product, skus }
    }
    return { ...product, skus, categories: categories.map((el) => el.name) }
  }

  async list(): Promise<ProductsJoinSku[]> {
    const products = await knex('products')
    const productjoinSku: ProductsJoinSku[] = []
    const sqlProductInCategoryRepository = new SqlProductInCategoryRepository()
    for (const product of products) {
      const categories =
        await sqlProductInCategoryRepository.findCategorytByProductId(
          product.productId as UUID,
        )
      const skus = await knex('skus').where('productId', product.productId)
      productjoinSku.push({
        ...product,
        skus,
        categories: categories?.map((el) => el.name),
      })
    }
    return productjoinSku
  }
}
