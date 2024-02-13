// eslint-disable-next-line
import { Knex } from 'knex'
import { UUID } from 'node:crypto'
import { Product } from '@/entities/Product'
import { Sku } from '@/entities/Sku'
import { Category } from '@/entities/Category'
declare module 'knex/types/tables' {
  interface Tables {
    products: Product
    skus: Sku
    categorys: Category
    products_categorys: {
      categoryId: UUID
      productId: UUID
    }
    images: {
      imageId: UUID
      name: string
      imageUrl: string
      skuId: UUID
    }
  }
}
