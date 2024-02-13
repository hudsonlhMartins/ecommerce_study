import { UUID } from 'node:crypto'
import { IProductsRepository, ProductsJoinSku } from '../IProductsRepository'
import { Product } from '@/entities/Product'
import { knex } from '@/database'

export class SqlProductRepository implements IProductsRepository {
  async save(product: Product): Promise<void> {
    await knex('products').insert(product)
  }

  async addProductInCategory({
    categoryId,
    productId,
  }: {
    categoryId: UUID
    productId: UUID
  }): Promise<void> {
    await knex('products_categorys').insert({
      categoryId,
      productId,
    })
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

  async findByCatedoryId(categoryId: UUID): Promise<ProductsJoinSku[]> {
    const data = await knex('products_categorys').where(
      'categoryId',
      categoryId,
    )
    const products = await knex('products').whereIn(
      'productId',
      data.map((item) => item.productId),
    )

    const productjoinSku: ProductsJoinSku[] = []
    for (const product of products) {
      const skus = await knex('skus').where('productId', product.productId)
      productjoinSku.push({ ...product, skus })
    }

    return productjoinSku
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
