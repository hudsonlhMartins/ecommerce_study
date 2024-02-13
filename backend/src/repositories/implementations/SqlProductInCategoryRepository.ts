import { UUID } from 'node:crypto'
import { knex } from '@/database'
import { IProductInCategoryRepository } from '../IProductInCategoryRepository'
import { ProductInCategory } from '@/entities/ProductInCategory'
import { ProductsJoinSku } from '../IProductsRepository'
import { Category } from '@/entities/Category'

export class SqlProductInCategoryRepository
  implements IProductInCategoryRepository
{
  async save({
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

  async findCategorytByProductId(
    productId: UUID,
  ): Promise<Category | undefined> {
    const productInCategory = await knex('products_categorys')
      .where({
        productId,
      })
      .first()
    if (!productInCategory) {
      return undefined
    }
    const { categoryId } = productInCategory
    const findCategory = await knex('categorys')
      .where('categoryId', categoryId)
      .first()

    return findCategory
  }

  async list(): Promise<ProductInCategory[]> {
    const productInCategory = await knex('products_categorys')
    return productInCategory
  }

  async findProductByCategoryId(
    categoryId: UUID,
  ): Promise<ProductsJoinSku[] | []> {
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
}
