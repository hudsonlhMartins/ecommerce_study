import { ProductInCategory } from '@/entities/ProductInCategory'

import { UUID } from 'node:crypto'
import { ProductsJoinSku } from './IProductsRepository'
import { Category } from '@/entities/Category'

export interface IProductInCategoryRepository {
  save({
    categoryId,
    productId,
  }: {
    categoryId: UUID
    productId: UUID
  }): Promise<void>
  list(): Promise<ProductInCategory[]>
  findProductByCategoryId(categoryId: UUID): Promise<ProductsJoinSku[] | []>
  findCategorytByProductId(productId: UUID): Promise<Category | undefined>
}
